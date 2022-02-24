import React, { Component } from "react";

// import { Query } from "@apollo/client";
import { CURRENCIES } from "./queries";
import { Query } from "@apollo/client/react/components";

export default class WomenPage extends Component {
  render() {
    return (
      <div>
        <Query
          query={CURRENCIES}
          // onCompleted={console.log(CURRENCIES)}s
        >
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
              <ul>
                {data.currencies.map(({ label, symbol }) => (
                  <li key={label}>
                    {label},{symbol}
                  </li>
                ))}
              </ul>
            );

            // if (data.CURRENCIES === undefined) {
            //   return null;
            // }
            // return (
            //   <ul>
            //     {data.CURRENCIES.map(({ label, symbol }) => (
            //       <li>{label}</li>
            //     ))}
            //   </ul>
            // );
            // return <div>hello</div>;
          }}
        </Query>
      </div>
    );
  }
}
