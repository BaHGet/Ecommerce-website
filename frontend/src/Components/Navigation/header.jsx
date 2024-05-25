import React, { Component } from 'react';
import Cart from './cart'
import logo from '../../assets/logo.png'
import './nav-bar.css'
import CategoryList from './categoryList'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const {category, setSelectedCategory, arrayOfAtrributes,Products} = this.props
    return (
      <header>
        <CategoryList category={category} setSelectedCategory={setSelectedCategory} />
        <Link to='/'>
          <img alt='logo' src={logo} className='logo'/>
        </Link>
        <Cart arrayOfAtrributes={arrayOfAtrributes} Products={Products} />
      </header>
    );
  }
}
export default Header