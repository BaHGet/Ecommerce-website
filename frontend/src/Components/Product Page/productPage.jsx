import {React, Component} from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from '../../queries';
import Gallery from './gallery'
import Details from './details';

class ProductPage extends Component {
  render() {
    const {selectedProductId,addToCart} =this.props || [''];
    return (
      <Query query={GET_PRODUCT} variables={{id:selectedProductId || localStorage.getItem('targetedProduct')}}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              <div className='products-gallery'>
                  <div className='product-contanier'>
                    <Gallery Product={data.product || ''} />
                    <Details Product={data.product || ''} addToCart={addToCart} />
                  </div>
              </div>
            );            
          }
        }
      </Query>
      
    );
  }
}

export default ProductPage
