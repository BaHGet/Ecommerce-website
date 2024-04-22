import {React, Component} from 'react'
import trolley from '../../assets/trolley.png'

class Cart extends Component {
  render() {
    return (
      <img alt='icon' src={trolley} className='trolley'/>
    );
  }
}


export default Cart