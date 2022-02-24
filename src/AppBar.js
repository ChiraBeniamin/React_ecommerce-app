/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AppBarStyling.css";
// import CartPage from "./CartPage";

export default class AppBar extends Component {
  render() {
    // console.log(this.props);
    return (
      // <div className="app-bar">
      <header>
        <ul>
          {this.props.categories.map((category, index) => {
            // console.log(`nav-item-${category.name}-${index}`);
            return (
              <Link
                key={`nav-item-${category.name}-${index}`}
                to={`/${category.name}`}
              >
                <li className="header-li">{category.name}</li>
              </Link>
            );
          })}
        </ul>

        <div className="select-container">
          <Link className="cart-link" to="/my-cart">
            <li className="header-li">
              <i className="fa fa-shopping-cart"></i>
            </li>
          </Link>
          <select
            className="currency-seletor"
            value={this.props.selectedCurrency}
            onChange={(event) => {
              console.log(event.target);
              this.props.selectCurrency(event.target.value);
            }}
          >
            {this.props.currencies.map((currency) => (
              <option
                // selected={currency.label === this.props.selectedCurrency}
                key={currency.label}
                className="currency-option"
                // defaultValue={`${currency.label}`}
              >
                {currency.symbol}
                {/* {currency.label} */}
              </option>
            ))}
            {/*             
            <option className="currency-option" value="$">
              $
            </option>
            <option className="currency-option" value="pesos">
              Pesos
            </option> */}
          </select>
          {/* <Link to="/cart-overlay">C</Link> */}
          {/* <li className="pop-up-button" href="#pop-up-one">
            <p>My cart</p>
            My cart
            <i className="fa fa-shopping-cart"></i>
          </li> */}
        </div>
      </header>
    );
  }
}
