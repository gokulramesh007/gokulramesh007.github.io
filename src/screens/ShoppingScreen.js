import React from "react";
import { Strings, Messages } from "../constants";
import { Menu, ProductList, Cart, Loader } from "../components";
import { products } from "../Services";
import "./ShoppingScreen.scss";

export default class ShoppingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      category: "",
      products: [],
      wishList: [],
      cartItems: []
    };
  }

  /**** LIFECYCLE METHODS START ****/

  componentDidMount = () => {
    let params =
        this.props.location &&
        this.props.location.state &&
        this.props.location.state.data,
      cartItems = [];
    if (params) {
      cartItems = params;
      this.setState({
        cartItems: cartItems
      });
    }
    this._initialLoad(this.props);
  };

  componentWillReceiveProps = props => {
    this._initialLoad(props);
  };

  /**** LIFECYCLE METHODS END ****/

  /**** SERVICE CALLS START ****/

  _fetchProducts = category => {
    products
      .fetchProducts(category)
      .then(response => {
        if (response && response.status === 200) {
          this.setState({
            products: response.data,
            isLoading: false
          });
        } else {
          console.log(response.statusText);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**** SERVICE CALLS END ****/

  /**** HELPER FUNCTIONS START ****/

  _initialLoad = props => {
    let category =
      props.match.params.category ||
      Strings.APPLICATION.ROUTES.DEFAULT_CATEGORY;
    this.setState({
      isLoading: true,
      category: category
    });
    this._fetchProducts(category);
  };

  _addToWishList = response => {
    let wishList = this.state.wishList;
    this.setState({
      wishList: wishList.concat(response)
    });
    alert("Item added to wishlist!");
  };

  _addToCart = response => {
    let cartItems = this.state.cartItems,
      newItem = true;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === response.id) {
        let count = cartItems[i].count || 1;
        if (count < 9) {
          cartItems[i]["count"] = count + 1;
          this.setState({
            cartItems: cartItems
          });
        } else {
          alert(Messages.CART.ITEM_COUNT_EXCEPTION);
        }
        newItem = false;
        break;
      }
    }
    if (newItem) {
      this.setState({
        cartItems: cartItems.concat(response)
      });
    }
  };

  _removeItemFromCart = (response, type) => {
    let cartItems = this.state.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === response.id) {
        if (
          type === Strings.APPLICATION.SHOPPING_SCREEN.BUTTON_ACTION.REMOVE_ALL
        ) {
          cartItems[i].count = 1;
          cartItems.splice(i, 1);
        } else {
          let count = cartItems[i].count || 1;
          cartItems[i].count = count > 1 ? cartItems[i].count - 1 : count;
          if (count - 1 <= 0) {
            cartItems.splice(i, 1);
          }    
        }
        this.setState({
          cartItems: cartItems
        });
        break;
      }
    }
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    const { isLoading, wishList, cartItems, category } = this.state;
    return (
      <div className="shopping-container">
        <div className="rw-sidemenu">
          <Menu category={category} cartItems={cartItems} wishList={wishList} />
        </div>
        <div className="rw-list">
          <div className="rw-shopping-header">
            <div className="category-title">
              {this.state.category}
            </div>
            <div className="user-details">
              <div className="username">
                {Strings.APPLICATION.SHOPPING_SCREEN.USER_DETAILS.USER_NAME}
              </div>
              <div className="user-pic">
                <img
                  src={Strings.APPLICATION.SHOPPING_SCREEN.USER_DETAILS.PIC}
                  alt="Ashok-profile-pic"
                />
              </div>
            </div>
          </div>
          <ProductList
            data={this.state.products}
            addToWishList={response => {
              this._addToWishList(response);
            }}
            addToCart={response => {
              this._addToCart(response);
            }}
          />
        </div>
        <div className="rw-order-summary">
          <Cart
            data={cartItems}
            removeItemFromCart={(response, type) => {
              this._removeItemFromCart(response, type);
            }}
            addToCart={response => {
              this._addToCart(response);
            }}
          />
        </div>
        {isLoading ? <Loader /> : null}
      </div>
    );
  }
}
