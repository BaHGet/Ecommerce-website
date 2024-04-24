import React, { Component } from 'react'
import ProductCard from './ProductCard';
import "./category-style.css";
export class category extends Component {
  render() {
    const { Products } = this.props;
    const { setSelectedProduct } = this.props;
    return (
      <div className='products-gallery'>
        {Products.map((product,r) =>{
          return(<ProductCard Key={r} Product={product} setSelectedProduct={setSelectedProduct}/>);
        })}
      </div>
    )
  }
}

export default category