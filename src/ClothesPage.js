import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { CLOTHES_CATEGORY } from "./queries";
import { Link } from "react-router-dom";

export default class ClothesPage extends Component {
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
  render() {
    return (
      <div className="products-container">
        <Query query={CLOTHES_CATEGORY}>
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
              <div className="products-container">
                {/* <Route path="/:id" component={<ProductDetails />} exact /> */}
                {data.category.products.map((product, index) => {
                  const uniqueKey = `clothes-${product.id}-${index}`;
                  // console.log(uniqueKey);

                  return (
                    <Link
                      key={uniqueKey}
                      className="link-name"
                      to={`${this.props.path}/${product.id}`}
                    >
                      <div className="product-elements-container">
                        <div className="img-container">
                          <img
                            key={`image-${product.id}-${index}`}
                            className="product-img"
                            src={product.gallery[0]}
                            alt={product.name}
                          />
                          {/* {product.gallery.map((photo, index) => (
                        ))} */}
                        </div>
                        <div className="product-content">
                          <div className="product-label">
                            {/* <Link className="link-name" to={`/${product.name}`}> */}
                            {/* <Link className="link-name" to={`/all/${product.id}`}>
                           
                           {product.name}
                          </Link> */}
                            <p className="product-name">{product.name}</p>
                            <div className="price-tag">
                              {this.showPrice(product)}
                            </div>
                          </div>
                          <button
                            className="add-to-cart-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              // e.stopImmediatePropagation();
                              this.props.addToCartHandler(product);
                              // e.stopPropagation();
                            }}
                          >
                            <i className="fa fa-shopping-cart"></i>
                            {/* Add To Cart */}
                          </button>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          }}
        </Query>
      </div>
      // <div className="products-container">
      //   <Query query={CLOTHES_CATEGORY}>
      //     {(result) => {
      //       // console.log("result-----", result);
      //       const data = result.data;
      //       const loading = result.loading;
      //       if (loading) {
      //         return <div>Loading...</div>;
      //       } else if (!data) {
      //         return <div>Error...</div>;
      //       }
      //       return (
      //         <div className="products-container">
      //           {data.category.products.map((product) => {
      //             const uniqueKey = `clothes-${product.name}-${product.id}`;

      //             <div key={uniqueKey} className="product-elements-container">
      //               <div>
      //                 {product.gallery.map((photo) => (
      //                   <img
      //                     key={product.id}
      //                     className="product-img"
      //                     src={photo[0]}
      //                     alt={product.name}
      //                   />
      //                 ))}
      //               </div>
      //               <div className="product-content">
      //                 <div className="product-label">{product.name}</div>
      //                 <div className="product-label">
      //                   <Link className="link-name" to={`/${product.name}`}>
      //                     {product.name}
      //                   </Link>
      //                 </div>
      //                 <div className="price-tag">USD 50.00 </div>
      //               </div>
      //             </div>;
      //           })}
      //         </div>
      //       );
      //     }}
      //   </Query>
      // </div>
    );
  }
}
