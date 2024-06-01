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
    setSelectedItems = (name,value,item) =>{
        this.setState((prev)=>({
            selectedItems:[...prev.selectedItems, {
                item:item,
                name:name,
                quantity:1,
                value:value
            }]
        }))
    }

    render() {
        const { Product, setSelectedAttributes } = this.props

        const handleAddattribute = (attributeValue,attributeName,item) => {
            const arr = this.state.selectedItems;
            if(arr.filter(ele => ele.name === attributeName).length === 0 ){
                this.setSelectedItems(attributeName,attributeValue,item);
            }else{
                if(arr.filter(ele => ele.value === attributeValue).length === 0){
                    this.setState((prev)=>({
                            selectedItems:[...prev.selectedItems.filter(ele => (ele.name !== attributeName)), {
                                item:item,
                                name:attributeName,
                                value:attributeValue
                            }]
                        }))
                }
            }
        };
        const handleAddtoCart= () =>{
            setSelectedAttributes(this.state.selectedItems);
            localStorage.setItem('selectedItems',JSON.stringify(this.state.selectedItems))
            this.setState(() => ({selectedItems:[]}))
        }

        if(Product){
            let didUserSelectAnyAttribute = this.state.selectedItems.length  !== 0 && Product.in_stock ? true:false
            return (
                <div className="product-details">
                    <h1>{Product.name}</h1>
                    {Product.attributes.map((attribute, n) => 
                        {
                            return attribute.id === "Color" ? (
                                <div data-testid={`product-attribute-${attribute.id.toLowerCase()}`}>
                                <h1 key={"attribute" + n} className="attribute-name">
                                    {attribute.id + ":"}
                                </h1>
                                <ul className={`tags`}>
                                    {attribute.items.map((item, n) => {
                                    const isSelected = this.state.selectedItems.filter(Item => Item.value === item.value).length === 1 ? true:false
                        
                                    return (
                                        <button key={"item" + n} className={`color-btn-tag ${isSelected ? 'selected-color-btn-tag-overlay':''}`} onClick={() => handleAddattribute(item.value,attribute.id,Product.id)}>
                                            <li  key={"item" + n} className={`color-tag`} style={{ backgroundColor: `${item.displayValue}` }}></li>
                                        </button>
                                    );
                                    })}
                                </ul>
                                </div>
                            ) : (
                                <div data-testid={`product-attribute-${attribute.id.toLowerCase().replaceAll(" ","-")}`}>
                                    <h1 key={"attribute" + n} className="attribute-name">
                                    {attribute.id + ":"}
                                    </h1>
                                    <ul className={`tags`}>
                                    {attribute.items.map((item, n) => {
                                        const isSelected = this.state.selectedItems.filter(Item => (Item.name === attribute.id && Item.value === item.value)).length === 1 ? true:false
                                        return (
                                        <button key={"item" + n} className="btn-tag"  onClick={() => handleAddattribute(item.value,attribute.id,Product.id)}>
                                            <li key={"item" + n} className={`tag ${isSelected ? 'selected-tag-overlay':''}`}> {item.value} </li>
                                        </button>
                                        );
                                    })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <button
                        onClick={() =>this.setState(() => ({selectedItems:[]}))}
                        style={{fontFamily:'Raleway', fontSize:'15px'}}
                    >reset</button>
                    <h1 className="attribute-name">Price:</h1>
                    <h2>{Product.price}</h2>
                    {
                        didUserSelectAnyAttribute ?
                            <button className='add-to-cart' onClick={() => handleAddtoCart()} data-testid='add-to-cart'>Add To Cart</button>
                        :
                            <>
                                <div className='not-allowed-overlay'></div>
                                <button className='add-to-cart not-allowed' data-testid='add-to-cart'>Add To Cart</button>
                            </>
                    }
                    
                    <p className='product-description' data-testid='product-description'>{parse(Product.description)}</p>
                </div>
            );
        }
    }
}

export default Details