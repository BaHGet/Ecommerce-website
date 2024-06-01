import {React, Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCTS } from '../../queries';
import ProductCard from './ProductCard';
import "./category-style.css";
import Loading from '../loading';

export default class Main extends Component {

  render() {
    const { setTargetedProduct, SelectedCategory } = this.props;
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;

            return (
              <div dataid='gallery' className='products-gallery'>
                {data.products.map((product,r) =>{
                
                    return  SelectedCategory === 'all' ?
                      <ProductCard Key={r} Product={product} setTargetedProduct={setTargetedProduct}/>
                    :
                      product.category === SelectedCategory ?
                        <ProductCard Key={r} Product={product} setTargetedProduct={setTargetedProduct}/>
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