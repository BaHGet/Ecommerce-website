import React, { Component } from 'react'
import ProductCard from './ProductCard';
import "./category-style.css";
export class category extends Component {
  render() {

    const { Products } = this.props;

    return (
      <div className='products-gallery'>
        {Products.map(product =>{
          return(<ProductCard Product={product} />);
        })}
      </div>
    )
  }
}

export default category