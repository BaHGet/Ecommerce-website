import React, { Component } from 'react'
import ProductCard from './ProductCard';
import "./category-style.css";
export class Category extends Component {
  render() {
    const { Products, setSelectedProduct} = this.props;
    // console.log(Products)
    return (
      <div className='products-gallery'>
        {Products.map((product,r) =>{
          return(<ProductCard Key={r} Product={product} setSelectedProduct={setSelectedProduct}/>);
        })}
      </div>
    )
  }
}

export default Category