import {React, Component} from 'react'
import './product-page-style.css'
import Gallery from './gallery'
import Details from './details'

class ProductPage extends Component {
  render() {
    const {selectedProduct} =this.props || [''];
    const Product = selectedProduct[0]
    return (
      <div className='product-contanier'>
        <Gallery Product={Product || ''} />
        <Details Product={Product || ''} />
      </div>
    );
  }
}

export default ProductPage