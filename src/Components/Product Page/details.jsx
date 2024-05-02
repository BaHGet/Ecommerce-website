import React, { Component } from 'react'
import parse from 'html-react-parser';
import './product-page-style.css'

const ss={
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

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems:[],
        };
    }
    setSelectedItems = (name,value) =>{
        this.setState((prev)=>({
            selectedItems:[...prev.selectedItems, {
                name:name,
                value:value
            }]
        }))
    }

    render() {
        const { Product } = this.props;

        const handleClick = (attributeValue,attributeName) => {
            const arr = this.state.selectedItems;
            // console.log(arr.filter(ele => (ele.value !== attributeValue)))

            if(arr.filter(ele => ele.name === attributeName).length === 0 ){
                this.setSelectedItems(attributeName,attributeValue);
            }else{
                if(arr.filter(ele => ele.value === attributeValue).length === 0){
                    this.setState((prev)=>({
                            selectedItems:[...prev.selectedItems.filter(ele => (ele.name !== attributeName)), {
                                name:attributeName,
                                value:attributeValue
                            }]
                        }))
                }
            }
        };

        return (
        <div className="product-details">
            <h1>{Product.name}</h1>
            {Product.attributes.map((attribute, n) => {
            return attribute.name === "Color" ? (
                <>
                <h1 key={"attribute" + n} className="attribute-name">
                    {attribute.name + ":"}
                </h1>
                <ul className={`tags`}>
                    {attribute.items.map((item, n) => {
                    const isSelected = this.state.selectedItems.filter(Item => Item.value === item.value).length === 1 ? true:false
                    console.log(isSelected)
        
                    return (
                        <button key={"item" + n} className="color-btn-tag" onClick={() => handleClick(item.value,attribute.id)}>
                        <>
                                {isSelected ? // ,position: "fix"
                                        <div className="selection-div-overlay" />
                                    : ''
                                }
                                <li  key={"item" + n} className="color-tag" style={{ backgroundColor: `${item.value}` }}></li>
                        </>
                        </button>
                    );
                    })}
                </ul>
                </>
            ) : (
                <>
                    <h1 key={"attribute" + n} className="attribute-name">
                    {attribute.name + ":"}
                    </h1>
                    <ul className={`tags`}>
                    {attribute.items.map((item, n) => {
                        const isSelected = this.state.selectedItems.filter(Item => (Item.name === attribute.id && Item.value === item.value)).length === 1 ? true:false
                        console.log(isSelected)
                        return (
                        <button key={"item" + n} className="btn-tag"  onClick={() => handleClick(item.value,attribute.id)}>
                            <>
                                {isSelected ? 
                                        <div className="selection-div-overlay"/>
                                    : ''
                                }
                                <li key={"item" + n} className="tag"> {item.value} </li>
                            </>
                        </button>
                        );
                    })}
                    </ul>
                </>
            );
            })}
            <h1>Price:</h1>
            <h2>{Product.prices[0].currency.symbol}{Product.prices[0].amount}</h2>
            <button></button>
            <p className="product-description">{parse(Product.description)}</p>
        </div>
        );}
}

export default Details