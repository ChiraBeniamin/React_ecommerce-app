import React, { Component } from "react";
import "./ProductDetails.css";

export default class ProductDetailsCard extends Component {
  showPrice(product) {
    const selectedPrice = product.prices.find((price) => {
      return price.currency.symbol === this.props.selectedCurrency;
    });
    // console.log(this.props.item.gallery[0]);
    // console.log("PROPS-----", this.props);
    return (
      <div>
        {selectedPrice.currency.symbol} {selectedPrice.amount}
      </div>
    );
  }
  render() {
    return (
      <div className="product-details-container">
        <div className="left-container">
          <div className="left-container-gallery">
            {this.props.item.gallery.map((photo, index) => (
              <img
                className="gallery-images"
                key={`product-image-${index}-${this.props.category}-${this.props.item.id}`}
                src={photo}
                alt=""
              />
            ))}
          </div>
          <div className="left-container-main-image">
            <img
              className="product-image"
              src={this.props.item.gallery[0]}
              alt={`${this.props.item.name}_image`}
            />
          </div>
        </div>

        <div className="right-container">
          <div className="product-description">
            <span>{this.props.item.brand}</span>
            <h1>{this.props.item.name}</h1>
            <div className="product-color">
              <span>Price</span>
            </div>
            <div className="product-price">
              <span>{this.showPrice(this.props.item)}</span>
              <button
                className="cart-btn"
                onClick={() => this.props.addToCartHandler(this.props.item)}
              >
                ADD TO CART
              </button>
            </div>
            <div
              className="product-description-text"
              dangerouslySetInnerHTML={{
                __html: this.props.item.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
