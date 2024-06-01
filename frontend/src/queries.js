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
        price
        in_stock
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

export const CREATE_ORDER= gql`
  mutation createOrder(
    $id: String!
    $product_id: String!
    $quantity: Int!
    $customer_id: String!
    $attributes: [AttributeInput!]!
  ) {
    createOrder(
      id: $id
      product_id: $product_id
      quantity: $quantity
      customer_id: $customer_id
      attributes: $attributes
    ) {
      id
      massage
    }
  }
`;