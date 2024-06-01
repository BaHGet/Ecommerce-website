import React, { Component } from 'react';
import Cart from './Cart/cart'
import logo from '../../assets/logo.png'
import './nav-bar.css'
import CategoryList from './categoryList'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const {selectedCategory, setSelectedCategory, arrayOfAttributes, selectedProductId} = this.props
    return (
      <header>
        <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Link to='/'>
          <img alt='logo' src={logo} className='logo'/>
        </Link>
        <Cart arrayOfAttributes={arrayOfAttributes} selectedProductId={selectedProductId} />
      </header>
    );
  }
}
export default Header