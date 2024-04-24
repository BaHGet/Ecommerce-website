import React, { Component } from 'react'
import "./category-style.css";
import { Link } from 'react-router-dom';

const test = (e) =>{
    // console.log(e.target.attributes.dataid.value);
    localStorage.setItem('Pid',e.target.attributes.dataid.value)
}

const handleAddToCart = () =>{
    //To-Do
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

        const {Product, setSelectedProduct} = this.props
        return (
            <Link to="/ProductPage">
                <div key={Product.id+'container'} dataid={Product.id} onClick={(e) => {test(e);setSelectedProduct();}} onMouseEnter={this.setHoveringStateTrue} onMouseLeave={this.setHoveringStateFalse} className='product-card'>
                    <div key={Product.id+'image'} dataid={Product.id} className='product-image' style={{backgroundImage:`url(${Product.gallery[0]})`}} >{Product.inStock?'':<h1 dataid={Product.id} className='out-of-stock'>Out of stock</h1>}</div>
                    <h1 key={Product.id+'name'} dataid={Product.id} className='product-name'>{Product.name}</h1>
                    <h2 key={Product.id+'pricetag'} dataid={Product.id} className='product-price'>
                    {<span className='product-price-symbol'>{Product.prices[0].currency.symbol}</span>}{Product.prices[0].amount} {' '}
                    </h2>
                    {!Product.inStock || !this.state.Hover.state ?'':<button key={Product.id+'btn'} onClick={handleAddToCart} dataid={Product.id} className='quick-shop-btn'></button>}
                </div>
            </Link>
        )
    }
}

export default ProductCard