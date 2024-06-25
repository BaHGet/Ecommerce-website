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
      isExpand ? 
        <div className='cart-container' data-testid='cart-btn'>
          <img
            alt='icon'
            src={trolley}
            className='trolley'
            onClick={handleChageExpandState}
          />
          { totalItems ? <span className='badge'>{totalItems}</span> : '' }
          <Bag 
            cart={cart}
            clearCart={clearCart}
            updateCart={updateCart}
            totalItems={totalItems}
          />

          <div className='cart-background' onClick={handleChageExpandState}></div>
        </div>
      :
        <div className='cart-container' data-testid='cart-btn'>
          <img
            alt='icon'
            src={trolley}
            className='trolley'
            onClick={handleChageExpandState}
          />
          { totalItems ? <span className='badge'>{totalItems}</span> : '' }
        </div>
    );
  }
}


export default Cart