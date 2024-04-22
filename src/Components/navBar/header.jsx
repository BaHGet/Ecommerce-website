import React from 'react'
import Cart from './cart'
import logo from '../../assets/logo.png'
import './nav-bar.css'
import CategoryList from './categoryList'

const Header = () => {
  return (
    <header>
      <CategoryList />
      <img alt='logo' src={logo} className='logo' />
      <Cart />
    </header>
  )
}

export default Header