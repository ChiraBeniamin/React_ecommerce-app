import { gql } from "@apollo/client";

export const CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

export const CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const ALL_CATEGORY = gql`
  {
    category(input: { title: "all" }) {
      name
      products {
        id
        name
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        gallery
        inStock
      }
    }
  }
`;

export const CLOTHES_CATEGORY = gql`
  {
    category(input: { title: "clothes" }) {
      name
      products {
        id
        name
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        gallery
        inStock
      }
    }
  }
`;

export const TECH_CATEGORY = gql`
  {
    category(input: { title: "tech" }) {
      name
      products {
        id
        name
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        gallery
        inStock
      }
    }
  }
`;

export const PRODUCT_NAME = gql`
  {
    category {
      products {
        name
      }
    }
  }
`;

export const productDetailsQuery = (productId) => gql`
  {
    product(id: "${productId}") {
      id
      name
      inStock
      description
      gallery
      brand
      prices {
        currency {
          symbol
        }
        amount
      }
      attributes {
        type
        id
      }
    }
  }
`;
