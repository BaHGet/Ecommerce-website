import {React, Component} from 'react'

class ProductPage extends Component {
  render() {
    const {selectedProduct} =this.props
    return (
      <div>{selectedProduct[0].name}</div>
    );
  }
}

export default ProductPage