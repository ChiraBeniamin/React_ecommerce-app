import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "./apolloClient";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
