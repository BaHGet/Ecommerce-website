import React, { Component } from 'react';
import { graphql } from '@apollo/react-hoc';
import { GET_ALL_PRODUCTS } from '../graphql/queries';
import ProductCard from './ProductCard';
import "./category-style.css";

export class Category extends Component {
  render() {
    const { Products, setTargetedProduct} = this.props;
    // console.log(Products)
    return (
      <div className='products-gallery'>
        {Products.map((product,r) =>{
          return(<ProductCard Key={r} Product={product} setTargetedProduct={setTargetedProduct}/>);
        })}
      </div>
    )
  }
}

export default graphql(GET_ALL_PRODUCTS)(Category);