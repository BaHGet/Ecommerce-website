import React, { Component } from 'react'
import parse from 'html-react-parser';
import './details-style.css'


class Details extends Component {
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
        const { Product } = this.props

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

        if(Product){
            return (
                <div className="product-details">
                    <h1>{Product.name}</h1>
                        {Product.attributes.map((attribute, n) => 
                            {
                                return attribute.name === "Color" ? (
                                    <>
                                    <h1 key={"attribute" + n} className="attribute-name">
                                        {attribute.name + ":"}
                                    </h1>
                                    <ul className={`tags`}>
                                        {attribute.items.map((item, n) => {
                                        const isSelected = this.state.selectedItems.filter(Item => Item.value === item.value).length === 1 ? true:false
                            
                                        return (
                                            <button key={"item" + n} className={`color-btn-tag ${isSelected ? 'selected-color-btn-tag-overlay':''}`} onClick={() => handleClick(item.value,attribute.id)}>
                                                <li  key={"item" + n} className={`color-tag`} style={{ backgroundColor: `${item.value}` }}></li>
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
                                            return (
                                            <button key={"item" + n} className="btn-tag"  onClick={() => handleClick(item.value,attribute.id)}>
                                                <li key={"item" + n} className={`tag ${isSelected ? 'selected-tag-overlay':''}`}> {item.value} </li>
                                            </button>
                                            );
                                        })}
                                        </ul>
                                    </>
                                )
                            })
                        }
                    <h1 className="attribute-name">Price:</h1>
                    <h2>{Product.prices[0].currency.symbol}{Product.prices[0].amount}</h2>
                    <button className='add-to-cart'>Add To Cart</button>
                    <p className="product-description">{parse(Product.description)}</p>
                </div>
                );
        }
    }
}

export default Details