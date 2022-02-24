import React, { Component } from "react";

import AppBar from "./AppBar";
import ClothesPage from "./ClothesPage";
import HomePage from "./HomePage";
import TechPage from "./TechPage";
import NotFoundPage from "./NotFoundPage";
import MyCart from "./MyCart";
import ProductDetails from "./ProductDetails";

import { CATEGORIES, CURRENCIES } from "./queries";

import { Routes, Route } from "react-router-dom";

import { apolloClient } from "./apolloClient";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currencies: [],
      cartItems: [],
      selectedCurrency: "$",
      productDetailsItem: [],
      selectedPrice: [],
      allProducts: [],
      categoryTitle: "",
      // productName: [],
    };
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.removeCartItemHandler = this.removeCartItemHandler.bind(this);
    this.checkCartedItems = this.checkCartedItems.bind(this);
    this.removeAllCartItems = this.removeAllCartItems.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    // this.productDetailsHandler = this.productDetailsHandler.bind(this);
  }

  componentDidMount() {
    // const pathLocation = window.location.pathname.split("/");
    // const pathName = pathLocation[1];
    // this.setState({ categoryTitle: pathName });

    // console.log("pathName", pathName);
    // console.log("categoryTitle---->", this.state.categoryTitle);
    // apolloClient
    //   .query({
    //     query: ALL_CATEGORY,
    //   })
    //   .then((res) => {
    //     this.setState({ allProducts: res.data.category.products });
    //     // console.log("res--->", res);
    //     // console.log("allProducts", this.state.allProducts);
    //   })
    //   .catch((err) => console.error(err));
    // -------
    apolloClient
      .query({
        query: CATEGORIES,
      })
      .then((res) => this.setState({ categories: res.data.categories }))
      .catch((err) => console.error(err));
    // -------
    apolloClient
      .query({
        query: CURRENCIES,
      })
      .then((res) => this.setState({ currencies: res.data.currencies }))
      .catch((err) => console.error(err));
    // -------
  }
  selectCurrency(currencySymbol) {
    this.setState({
      selectedCurrency: currencySymbol,
    });
  }

  addToCartHandler(item) {
    const cartItemIds = this.state.cartItems.map((user) => {
      return user.id;
    });
    if (item.inStock === false) {
      // return;
      return alert(`${item.name} is out of stock!`);
    } else if (cartItemIds.find((id) => id === item.id)) {
      return alert("Item is already added to Cart");
    }

    this.setState({
      cartItems: this.state.cartItems.concat(item),
    });
    // alert("Item successfully added to Cart");s
    // console.log("CartItems--->", this.state.cartItems);
  }

  // console.log("currencies______", this.state.currencies);

  removeCartItemHandler(itemId) {
    this.setState({
      cartItems: this.state.cartItems.filter((item) => item.id !== itemId),
    });
  }

  removeAllCartItems() {
    this.setState({
      cartItems: [],
    });
  }

  checkCartedItems() {
    // const cartItemId = this.state.cartItems.map((user) => user.id);
  }

  showSnackBar() {}

  render() {
    return (
      <div>
        {/* <div id="cd-shadow-layer"></div> */}
        <AppBar
          currencies={this.state.currencies}
          categories={this.state.categories}
          selectCurrency={this.selectCurrency}
          selectedCurrency={this.state.selectedCurrency}
        />
        {/* <h1>{this.state.categoryTitle}</h1> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}

          {this.state.categories.map((category, index) => {
            const path = `/${category.name}`;
            // console.log("PATH-----", path);
            const uniqueKey = `route-${category.name}-${index}`;

            switch (category.name) {
              case "all":
                return (
                  <React.Fragment key={uniqueKey}>
                    <Route
                      // key={uniqueKey}
                      path={path}
                      element={
                        <HomePage
                          addToCartHandler={this.addToCartHandler}
                          // addPricesHandler={this.addPricesHandler}
                          selectedCurrency={this.state.selectedCurrency}
                          path={path}
                        />
                      }
                    />
                    <Route
                      // key={`${uniqueKey}-detail`}
                      path={`/${path}/:id`}
                      element={
                        <ProductDetails
                          selectedCurrency={this.state.selectedCurrency}
                          addToCartHandler={this.addToCartHandler}
                          category={category.name}
                        />
                      }
                    />
                  </React.Fragment>
                );
              case "clothes":
                return (
                  <React.Fragment key={uniqueKey}>
                    <Route
                      // key={uniqueKey}
                      path={path}
                      element={
                        <ClothesPage
                          addToCartHandler={this.addToCartHandler}
                          // addPricesHandler={this.addPricesHandler}
                          selectedCurrency={this.state.selectedCurrency}
                          path={path}
                        />
                      }
                    />
                    <Route
                      // key={`${uniqueKey}-detail`}
                      path={`/${path}/:id`}
                      element={
                        <ProductDetails
                          addToCartHandler={this.addToCartHandler}
                          // addPricesHandler={this.addPricesHandler}
                          selectedCurrency={this.state.selectedCurrency}
                          category={category.name}
                        />
                      }
                    />
                  </React.Fragment>
                );
              case "tech":
                return (
                  <React.Fragment key={uniqueKey}>
                    <Route
                      // key={uniqueKey}
                      path={path}
                      element={
                        <TechPage
                          addToCartHandler={this.addToCartHandler}
                          // addPricesHandler={this.addPricesHandler}
                          selectedCurrency={this.state.selectedCurrency}
                          path={path}
                        />
                      }
                    />
                    <Route
                      // key={`${uniqueKey}-detail`}
                      path={`/${path}/:id`}
                      element={
                        <ProductDetails
                          addToCartHandler={this.addToCartHandler}
                          selectedCurrency={this.state.selectedCurrency}
                          category={category.name}
                        />
                      }
                    />
                  </React.Fragment>
                );
              default:
                return (
                  <Route
                    key={uniqueKey}
                    path={path}
                    element={<NotFoundPage />}
                  />
                );
            }
          })}
          <Route
            path="/my-cart"
            element={
              <MyCart
                removeCartItemHandler={this.removeCartItemHandler}
                removeAllCartItems={this.removeAllCartItems}
                item={this.state.cartItems}
                selectedCurrency={this.state.selectedCurrency}
              />
            }
          />
          {/* <Route path="/:id" element={<ProductDetails />} /> */}
          {/* <Route path="/cart-overlay" element={<CartOverlay />} /> */}
        </Routes>
      </div>
    );
  }
}
