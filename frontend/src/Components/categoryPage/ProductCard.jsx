import React, { Component } from 'react'
import "./category-style.css";
import { Link } from 'react-router-dom';



const handleAddToCart = () =>{
    //To-Do
    console.log('clicked')
}
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
        const id =e.target.attributes.dataid.value;
        this.setState(() =>({
            Hover:{
                state:true,
                id:id
            } 
        }));
    }
    setHoveringStateFalse = (e)=> {
        const id =e.target.attributes.dataid.value;
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
        return (
            <>
                <div 
                    key={Product.id+'container'} 
                    dataid={Product.id}  
                    onMouseEnter={this.setHoveringStateTrue} 
                    onMouseLeave={this.setHoveringStateFalse} 
                    className='product-card'
                >
                    <Link to="/ProductPage">
                        <div 
                            key={Product.id+'image'} 
                            dataid={Product.id} 
                            onClick={() => handleAssignTargetedProduct(Product.id)} className='product-image' 
                            style={{backgroundImage:`url(${Product.gallery[0]})`}}
                        >
                            {Product.in_stock?'':<h1 dataid={Product.id} className='out-of-stock'>Out of stock</h1>}
                        </div>
                        <h1 
                            key={Product.id+'name'} 
                            dataid={Product.id} 
                            onClick={() => handleAssignTargetedProduct(Product.id)} 
                            className='product-name'
                        >{Product.name}</h1>
                        <h2 
                            key={Product.id+'pricetag'} 
                            dataid={Product.id} 
                            onClick={() => handleAssignTargetedProduct(Product.id)} 
                            className='product-price'
                        >
                        {<span className='product-price-symbol'>{Product.price}</span>} {' '}
                        </h2> 
                    </Link>
                    { // if product in stock or if the current element is hovred then the cart btn will not be shown
                        !Product.in_stock || !this.state.Hover.state ?
                        ''
                    :
                        <button key={Product.id+'btn'} onClick={handleAddToCart} dataid={Product.id} className='quick-shop-btn'></button>
                    }
                </div>
    
            </>
        )
    }
}

export default ProductCard