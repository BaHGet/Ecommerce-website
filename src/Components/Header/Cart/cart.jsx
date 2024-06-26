import {React, Component} from 'react'
import trolley from './../../../assets/trolley.png'
import './cart-style.css'
import Bag from './Bag';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand:false,
    };
  }
  
  setExpand = (state) => {
    this.setState({ isExpand: state });
  }

  render() {
    const { cart, clearCart, updateCart } = this.props;
    const { isExpand } = this.state;
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const handleChageExpandState = () => {
      this.setExpand(!isExpand);
    }

    return (
        <div className='cart-container' data-testid='cart-btn'>
          <img
            alt='icon'
            src={trolley}
            className='trolley'
            data-testid='cart-btn'
            onClick={handleChageExpandState}
          />
          { totalItems ? 
            <span className='badge' data-testid="cart-count-bubble">{totalItems}</span> 
          : '' }
          {isExpand ?
            <>
              <Bag 
                cart={cart}
                clearCart={clearCart}
                updateCart={updateCart}
                totalItems={totalItems}
              />
              <div className='cart-background' onClick={handleChageExpandState}></div>
            </>
          :''}

          
        </div>
    );
  }
}


export default Cart