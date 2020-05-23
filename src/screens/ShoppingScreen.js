import React from "react";
import {Strings} from "../constants";

export default class ShoppingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      category: ''
    };
  }

  componentDidMount = () => {
    let category = this.props.match.params.category || Strings.APPLICATION.ROUTES.DEFAULT_CATEGORY;
    this.setState({
      category: category
    });
    console.log("componentDidMount : ", category);
  }

  componentWillReceiveProps = props => {
    // this.setState({
    //   isLoading: true
    // });
    let category = props.match.params.category;
    this.setState({
      category: category
    });
    console.log("componentWillReceiveProps : ", category);
  };

  render() {
    return <div>{this.state.category}</div>;
  }
}
