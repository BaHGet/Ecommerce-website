import React, { Component } from 'react'
import parse from 'html-react-parser';
import './details-style.css'


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAttributes: {},
        };
    }
    setSelectedAttribute = (name, value, id) => {
        this.setState((prevState) => ({
            selectedAttributes: { ...prevState.selectedAttributes, [name]: value }
        }));
    }

    handleAddToCart = () => {
        const { Product, addToCart } = this.props;
        const { selectedAttributes } = this.state;

        if ( Object.keys(selectedAttributes).length === Product.attributes.length) {
        const cartItem = {
            productId: Product.id,
            name: Product.name,
            price: Product.price,
            attributes: selectedAttributes,
            quantity: 1
        };
        addToCart(cartItem);
        this.setState({ selectedAttributes: {} });
        }
    }

    render() {
        const { Product } = this.props
        const { selectedAttributes } = this.state;
        const allAttributesSelected = (Object.keys(selectedAttributes).length === Product.attributes.length) && Product.in_stock;
        
        if(Product){
            return (
                <div className="product-details">
                    <h1>{Product.name}</h1>
                    {Product.attributes.map((attribute, index) => 
                        {
                            return attribute.id === "Color" ? (
                                <div key={index} data-testid={`product-attribute-${attribute.id.toLowerCase()}`}>
                                <h1 key={"attribute" + index} className="attribute-name">
                                    {attribute.id + ":"}
                                </h1>
                                <ul className={`tags`}>
                                    {attribute.items.map((item, index) => {
                        
                                    return (
                                        <button key={"item" + index} className={`color-btn-tag ${selectedAttributes[attribute.id] === item.value ? 'selected-color-btn-tag-overlay' : ''}`} onClick={() => this.setSelectedAttribute(attribute.id, item.value)}>
                                            <li  key={"item" + index} className={`color-tag`} style={{ backgroundColor: `${item.displayValue}` }}></li>
                                        </button>
                                    );
                                    })}
                                </ul>
                                </div>
                            ) : (
                                <div key={index} data-testid={`product-attribute-${attribute.id.toLowerCase().replaceAll(" ","-")}`}>
                                    <h1 key={"attribute" + index} className="attribute-name">{attribute.id + ":"}</h1>
                                    <ul key={"attribute-tags" + index} className={`tags`}>
                                    {attribute.items.map((item, index) => {
                                        return (
                                        <button key={"item" + index} className="btn-tag"  onClick={() => this.setSelectedAttribute(attribute.id, item.value, Product.id)}>
                                            <li key={"item" + index} className={`tag ${selectedAttributes[attribute.id] === item.value ? 'selected-tag-overlay' : ''}`}> {item.value} </li>
                                        </button>
                                        );
                                    })}
                                    </ul>
                                </div>
                            )
                        })
                    }

                    <button
                        onClick={() =>this.setState(() => ({selectedAttributes:[]}))}
                        style={{fontFamily:'Raleway', fontSize:'15px'}}
                        className="reset-btn"
                    >reset</button>

                    <h1 className="attribute-name">Price:</h1>

                    <h2>{Product.price}</h2>
                    
                    <button
                        key={Product.id}
                        className={`add-to-cart ${allAttributesSelected ? '' : 'not-allowed'}`}
                        onClick={this.handleAddToCart}
                        disabled={!allAttributesSelected}
                    >
                    Add To Cart
                    </button>
                    
                    <p className='product-description' data-testid='product-description'>{parse(Product.description.replaceAll('\\n', ''))}</p>
                </div>
            );
        }
    }
}

export default Details