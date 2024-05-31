import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query getProducts {
      products {
        id
        name
        price
        in_stock
        category
        gallery
      }
    }
`;

export const GET_Categories = gql`
  query getCategories {
    categories {
      id
      name
    }
  }
`;

export const GET_PRODUCT = gql`
    query GetProduct($id: String!) {
      product(id: $id) {
        id
        name
        brand
        price
        in_stock
        category
        attributes{
            id
            items{
                displayValue
                value
            }
        }
        gallery
        description
      }
    }
`;
