import React from 'react'
import './category-style.css'

const CategoryList = () => {
  return (
    <>
        <ul className='category-list'>
            <li  className='category-list-items'>Woman</li>
            <li  className='category-list-items'>Man</li>
            <li  className='category-list-items'>Kids</li>
        </ul>
    </>
  )
}

export default CategoryList