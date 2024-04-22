import React, { Component } from 'react'
import "./category-style.css";

const one ={
    "__typename": "Product",
    "attributes": [
        {
            "__typename": "AttributeSet",
            "id": "Size",
            "items": [
                {
                    "__typename": "Attribute",
                    "displayValue": "40",
                    "id": "40",
                    "value": "40"
                },
                {
                    "__typename": "Attribute",
                    "displayValue": "41",
                    "id": "41",
                    "value": "41"
                },
                {
                    "__typename": "Attribute",
                    "displayValue": "42",
                    "id": "42",
                    "value": "42"
                },
                {
                    "__typename": "Attribute",
                    "displayValue": "43",
                    "id": "43",
                    "value": "43"
                }
            ],
            "name": "Size",
            "type": "text"
        }
    ],
    "brand": "Nike x Stussy",
    "category": "clothes",
    "description": "<p>Great sneakers for everyday use!</p>",
    "gallery": [
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
    ],
    "id": "huarache-x-stussy-le",
    "inStock": true,
    "name": "Nike Air Huarache Le",
    "prices": [
        {
            "__typename": "Price",
            "amount": 144.69,
            "currency": {
                "__typename": "Currency",
                "label": "USD",
                "symbol": "$"
            }
        }
    ]
}

export class ProductCard extends Component {
    render() {

        const {Product} = this.props
    // style={{marginRight: spacing + 'em'}}
        return (
            <div className='product-card'>
                <div className='product-image' style={{backgroundImage:`url(${Product.gallery[0]})`}} ></div>
                <h1 className='product-name'>{Product.name}</h1>
                <h2 className='product-price'>
                    {Product.prices[0].amount} {' '}{<span className='product-price-symbol'>{Product.prices[0].currency.symbol}</span>}
                </h2>
            </div>
        )
    }
}

export default ProductCard