import React from "react";
import { Strings } from "../constants";
import { Menu, ProductList, Cart, Loader } from "../components";
import { fetchProducts } from "../Services";
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

  componentDidMount = () => {
    let category =
      this.props.match.params.category ||
      Strings.APPLICATION.ROUTES.DEFAULT_CATEGORY;
    this.setState({
      category: category
    });
    console.log("componentDidMount : ", category);
    this._fetchProducts(category);
  };

  componentWillReceiveProps = props => {
    let category =
      props.match.params.category ||
      Strings.APPLICATION.ROUTES.DEFAULT_CATEGORY;
    this.setState({
      isLoading: true,
      category: category
    });
    console.log("componentWillReceiveProps : ", category);
    this._fetchProducts(category);
  };

  _fetchProducts = category => {
    fetchProducts(category)
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

  _addToWishList = response => {
    let wishList = this.state.wishList;
    this.setState({
      wishList: wishList.concat(response)
    });
  };

  _addToCart = response => {
    let cartItems = this.state.cartItems;
    this.setState({
      cartItems: cartItems.concat(response)
    });
  };

  _removeItemFromCart = response => {
    let cartItems = this.state.cartItems;
    cartItems.forEach((item, index) => {
      if (item.id === response.id) {
        cartItems.splice(index);
        this.setState({
          cartItems: cartItems
        });
        return true;
      }
    });
  };

  render() {
    const { isLoading, wishList, cartItems } = this.state;
    return (
      <div className="shopping-container">
        <div className="rw-sidemenu">
          <Menu />
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
            removeItemFromCart={response => {
              this._removeItemFromCart(response);
            }}
          />
        </div>
        {isLoading ? <Loader /> : null}
      </div>
    );
  }
}
