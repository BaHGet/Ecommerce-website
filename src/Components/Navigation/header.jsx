import React, { Component } from 'react';
import Cart from './cart'
import logo from '../../assets/logo.png'
import './nav-bar.css'
import CategoryList from './categoryList'

class Header extends Component {
  render() {
    const {category, setSelectedCategory} = this.props
    return (
      <header>
        <CategoryList category={category} setSelectedCategory={setSelectedCategory} />
        <img alt='logo' src={logo} className='logo' onClick={() => window.location = '/'} />
        <Cart />
      </header>
    );
  }
}
export default Header