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
                value:value
            }]
        }))
    }

    render() {
        const { Product, setSelectedAtrributes } = this.props

        const handleAddAtrribute = (attributeValue,attributeName,item) => {
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
            setSelectedAtrributes(this.state.selectedItems);
            this.setState(() => ({selectedItems:[]}))
        }

        if(Product){
            let didUserSelectAnyAttribute = this.state.selectedItems.length  !== 0 && Product.inStock ? true:false
            return (
                <div className="product-details">
                    <h1>{Product.name}</h1>
                    {Product.attributes.map((attribute, n) => 
                        {
                            return attribute.id === "Color" ? (
                                <>
                                <h1 key={"attribute" + n} className="attribute-name">
                                    {attribute.name + ":"}
                                </h1>
                                <ul className={`tags`}>
                                    {attribute.items.map((item, n) => {
                                    const isSelected = this.state.selectedItems.filter(Item => Item.value === item.value).length === 1 ? true:false
                        
                                    return (
                                        <button key={"item" + n} className={`color-btn-tag ${isSelected ? 'selected-color-btn-tag-overlay':''}`} onClick={() => handleAddAtrribute(item.value,attribute.id,Product.id)}>
                                            <li  key={"item" + n} className={`color-tag`} style={{ backgroundColor: `${item.displayValue}` }}></li>
                                        </button>
                                    );
                                    })}
                                </ul>
                                </>
                            ) : (
                                <>
                                    <h1 key={"attribute" + n} className="attribute-name">
                                    {attribute.id + ":"}
                                    </h1>
                                    <ul className={`tags`}>
                                    {attribute.items.map((item, n) => {
                                        const isSelected = this.state.selectedItems.filter(Item => (Item.name === attribute.id && Item.value === item.value)).length === 1 ? true:false
                                        return (
                                        <button key={"item" + n} className="btn-tag"  onClick={() => handleAddAtrribute(item.value,attribute.id,Product.id)}>
                                            <li key={"item" + n} className={`tag ${isSelected ? 'selected-tag-overlay':''}`}> {item.value} </li>
                                        </button>
                                        );
                                    })}
                                    </ul>
                                </>
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
                            <button className='add-to-cart' onClick={() => handleAddtoCart()}>Add To Cart</button>
                        :
                            <>
                                <div className='not-allowed-overlay'></div>
                                <button className='add-to-cart not-allowed'>Add To Cart</button>
                            </>
                    }
                    
                    <p className='product-description'>{parse(Product.description)}</p>
                </div>
            );
        }
    }
}

export default Details