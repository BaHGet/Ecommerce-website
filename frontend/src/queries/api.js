import { gql, useQuery } from '@apollo/client';

let ProductsQuery = gql`
query getProducts {
    products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
            id
            name
            type
            items {
                displayValue
                value
                id
            }
        }
        prices 
    }
`;
