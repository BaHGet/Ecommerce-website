import {React, Component } from 'react';
import {getAllProducts} from '../../api';
import ProductCard from './ProductCard';
import "./category-style.css";
import Loading from '../loading';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      products: [],
    }
  }

  componentDidMount() {
    getAllProducts()
    .then((data) => {
      this.setState(() => ({
        loading: false,
        products: data.products
      }))
    }).catch((error) => {
      if (error) {
        this.setState(() => ({
          loading: false,
          error: true
        }))
      }
    })
  }
  render() {
    const { setTargetedProduct, SelectedCategory, addToCart } = this.props;
    return (
      <div key='gallery' dataid='gallery' className='products-gallery'>
        
      </div>
    )
  }
}

/* 







{data.products.map((product,index) =>{
        
  return  SelectedCategory === 'all' ?
    <ProductCard Key={index} Product={product} setTargetedProduct={setTargetedProduct} addToCart={addToCart}/>
  :
    product.category === SelectedCategory ?
      <ProductCard Key={index} Product={product} setTargetedProduct={setTargetedProduct} addToCart={addToCart}/>
    :
      ''

})} 





*/