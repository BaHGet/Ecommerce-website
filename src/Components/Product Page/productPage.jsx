import {React, Component} from 'react'
import Gallery from './gallery'
import Details from './details'

class ProductPage extends Component {
  render() {
    const {selectedProduct, setSelectedAtrributes} =this.props || [''];
    const Product = selectedProduct[0]
    return (
      <div className='product-contanier'>
        <Gallery Product={Product || ''} />
        <Details Product={Product || ''} setSelectedAtrributes={setSelectedAtrributes} />
      </div>
    );
  }
}

export default ProductPage