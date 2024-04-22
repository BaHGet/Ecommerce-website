import {React, Component} from 'react'
import './navigation-categories-style.css'

class CategoryList extends Component {
  render() {
    return (
      <>
        <ul className='category-list'>
          <li className='category-list-items'>Woman</li>
          <li className='category-list-items'>Man</li>
          <li className='category-list-items'>Kids</li>
        </ul>
      </>
    );
  }
}


export default CategoryList