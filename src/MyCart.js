import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CartOverlay.css";

export default class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currency: this.props.selectedCurrency,
      allPrices: [],
      totalAmount: [],
    };
    this.showPrice = this.showPrice.bind(this);
    this.showTotalPrice = this.showTotalPrice.bind(this);
  }

  showTotalPrice(price) {
    console.log("selectedPrice----->", price.amount);
  }

  showPrice(product) {
    const selectedPrice = product.prices.find((price) => {
      // console.log("price----->", price.currency.symbol);
      return price.currency.symbol == this.props.selectedCurrency;
    });
    console.log(this.props.item);
    // this.showTotalPrice(selectedPrice);
    // var allPrices = [];
    // allPrices.push(selectedPrice.amount);
    // console.log("allPrices---->", allPrices);
    // this.setState({
    //   totalAmount: this.state.totalAmount.push(allPrices),
    // });
    // const totalAmoun= ;
    // console.log("selectedPrice----->", selectedPrice.amount);
    // const allPrices = [];
    // allPrices.push(selectedPrice.amount);
    // console.log("allPrices---->", allPrices);
    // const tpd = [];
    // tpd.push(allPrices);
    // console.log("tdp----", tpd);
    // // this.setState({
    // //   allPrices: this.state.allPrices.concat(allPrices),
    // // });
    // console.log("total------>", this.state.totalAmount);
    // var subTotal = 0;
    // subTotal += selectedPrice.amount;

    // this.setState({
    //   allPrices: subTotal,
    // });
    // console.log(this.state.allPrices);
    // console.log("selectedPrce-----", selectedPrice.amount);
    // console.log(
    // "this.props.selectedCurrency-----", this.props.selectedCurrency;
    // );
    return (
      <div className="amount">
        {selectedPrice.currency.symbol} {selectedPrice.amount}
      </div>
    );
  }

  render() {
    return (
      <div className="cart-container">
        <div className="header">
          <h3 className="heading">My Cart</h3>
          <h5 className="action" onClick={this.props.removeAllCartItems}>
            Remove all
          </h5>
        </div>
        {this.props.item.map((product, index) => (
          <div key={`cart-${product.id}=${index}`} className="cart-Items">
            <div className="image-box">
              <img
                className="product-image"
                src={product.gallery[0]}
                style={{ height: "120px", width: "120px" }}
                alt={`${product.name}-img`}
              />
            </div>

            <div className="about">
              <Link
                key={`cart-${product.id}`}
                className="link-name"
                to={`/all/${product.id}`}
              >
                <h1 className="title">{product.name}</h1>
              </Link>
              <h3 className="subtitle">{product.brand}</h3>
              {/* <img
                  src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                  style={{ height: "30px" }}
                /> */}
            </div>
            <div className="counter">
              <div className="counter">
                <div className="btn">+</div>
                <div className="count">2</div>
                <div className="btn">-</div>
              </div>
            </div>

            <div className="prices">
              {/* <div className="amount">$2.99</div> */}
              {this.showPrice(product)}
              <div className="save"></div>
              <div className="remove">
                <u onClick={() => this.props.removeCartItemHandler(product.id)}>
                  Remove
                </u>
              </div>
            </div>
          </div>
        ))}
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
            </div>
            <div className="total-amount">200</div>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    );
  }
}
