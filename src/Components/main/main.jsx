import {React, Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCTS } from '../../queries';
import ProductCard from './ProductCard';
import "./category-style.css";
import Loading from '../loading';

export default class Main extends Component {

  render() {
    const { setTargetedProduct, SelectedCategory, addToCart } = this.props;
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;

            return (
              <div key='gallery' dataid='gallery' className='products-gallery'>
                {data.products.map((product,index) =>{
                
                    return  SelectedCategory === 'all' ?
                      <ProductCard Key={index} Product={product} setTargetedProduct={setTargetedProduct} addToCart={addToCart}/>
                    :
                      product.category === SelectedCategory ?
                        <ProductCard Key={index} Product={product} setTargetedProduct={setTargetedProduct} addToCart={addToCart}/>
                      :
                        ''
                
                })}
              </div>
            );            
          }
        }
      </Query>
    )
  }
}

/* 





*/