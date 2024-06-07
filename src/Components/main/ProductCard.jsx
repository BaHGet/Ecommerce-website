import React, { Component } from 'react'
import "./category-style.css";
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            Hover:{
                state:false,
                id:'m'
            }
        };
    }
    
    setHoveringStateTrue = (e)=> {
        let id =e.target.attributes.dataid.value;
        this.setState(() =>({
            Hover:{
                state:true,
                id:id
            } 
        }));
    }
    setHoveringStateFalse = (e)=> {
        let id =e.target.attributes.dataid.value;
        this.setState(() =>({
            Hover:{
                state:false,
                id:id
            }
        }));
    }
    render() {
        const {Product, setTargetedProduct} = this.props
        const handleAssignTargetedProduct = (id) =>{
            setTargetedProduct(id);
        }
        const getDefaultOptions = (attributes) => {
            if(attributes){
                let array;
                array=attributes.reduce((acc, attribute) => {
                    acc[attribute.id] = attribute.items[0].value; 
                    return acc;
                }, {})
                return array
            }
        };
        const handleAddToCart = () =>{
            const {addToCart, Product} = this.props
                const newCartItem = {
                    productId: Product.id,
                    name: Product.name,
                    price: Product.price,
                    attributes: getDefaultOptions(Product.attributes),
                    quantity: 1
                }
                addToCart(newCartItem)
            
        }
        return (
            <>
                <div 
                    key={Product.id} 
                    dataid={Product.id}  
                    onMouseEnter={this.setHoveringStateTrue} 
                    onMouseLeave={this.setHoveringStateFalse} 
                    className='product-card'
                    data-testid={`product-${Product.id}`}
                >
                    <Link dataid={Product.id} to="/ProductPage">
                        <div
                            dataid={Product.id} 
                            onClick={() => handleAssignTargetedProduct(Product.id)} className='product-image' 
                            style={{backgroundImage:`url(${Product.gallery[0]})`}}
                        >
                            {Product.in_stock?'':<h1 dataid={Product.id} className='out-of-stock'>Out of stock</h1>}
                        </div>
                        <h1
                            dataid={Product.id} 
                            onClick={() => handleAssignTargetedProduct(Product.id)} 
                            className='product-name'
                        >{Product.name}</h1>
                        <h2
                            dataid={Product.id} 
                            onClick={() => handleAssignTargetedProduct(Product.id)} 
                            className='product-price'
                        >
                            {<span className='product-price-symbol' dataid={Product.id} >{Product.price}</span>} {' '}
                        </h2> 
                    </Link>
                    { // if product in stock or if the current element is hovred then the cart btn will not be shown
                        !Product.in_stock || !this.state.Hover.state ?
                        ''
                    :
                        <button
                            onClick={handleAddToCart}
                            dataid={Product.id}
                            className='quick-shop-btn'
                            data-testid='cart-btn'
                        ></button>
                    }
                </div>
            </>
        )
    }
}

export default ProductCard