import {React, Component} from 'react'
import './navigation-categories-style.css'

class CategoryList extends Component {
  render() {
    const isInLoction = window.location.pathname === '/' ? true : false
    console.log(isInLoction)
    const {category, setSelectedCategory} = this.props
    return (
      <>
        <ul className={`category-list ${isInLoction? '':'hide'}`}>
          <li dataname='all' onClick={(e) =>setSelectedCategory(e)} className={`category-list-items ${category === 'all' ? 'selected ':''}`}>All</li>
          <li dataname='clothes' onClick={(e) =>setSelectedCategory(e)} className={`category-list-items ${category === 'clothes' ? 'selected ':''}`}>Clothes</li>
          <li dataname='tech' onClick={(e) =>setSelectedCategory(e)} className={`category-list-items ${category === 'tech' ? 'selected ':''}`}>Tech</li>
        </ul>
      </>
    );
  }
}


export default CategoryList