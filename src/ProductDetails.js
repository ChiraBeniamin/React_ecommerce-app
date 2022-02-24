import React, { Component } from "react";
import "./ProductDetails.css";
// import { apolloClient } from "./apolloClient";
import { productDetailsQuery } from "./queries";
// import ProductDetailsElements from "./ProductDetailsElements";
import { Query } from "@apollo/client/react/components";
import ProductDetailsCard from "./ProductDetailsCard";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    // const pathname = window.location.pathname.split("/");
    // const pathNameProductId = pathname[pathname.length - 1];
    // console.log("windowLocation", window.location);
    // apolloClient
    //   .query({
    //     query: productDetailsQuery(pathNameProductId),
    //   })
    //   .then((res) => {
    //     console.log("res---->", res.data.product);
    //     this.setState({ item: res.data.product });
    //   })
    //   .catch((err) => console.error(err));
  }

  showPrice(product) {
    const selectedPrice = product.prices.find((price) => {
      return price.currency.symbol === this.props.selectedCurrency;
    });

    return (
      <div>
        {selectedPrice.currency.symbol} {selectedPrice.amount}
      </div>
    );
  }

  getProductIdFromUrl = () => {
    const pathname = window.location.pathname.split("/");
    return pathname[pathname.length - 1];
  };

  render() {
    return (
      <div>
        <Query query={productDetailsQuery(this.getProductIdFromUrl())}>
          {(result) => {
            // console.log("result-----", result);
            const data = result.data;
            const loading = result.loading;
            if (loading) {
              return <div>Loading...</div>;
            } else if (!data) {
              return <div>Error...</div>;
            }
            return (
              <ProductDetailsCard
                addToCartHandler={this.props.addToCartHandler}
                selectedCurrency={this.props.selectedCurrency}
                item={data.product}
                category={this.props.category}
              />
            );
          }}
        </Query>
      </div>
    );
  }
}
