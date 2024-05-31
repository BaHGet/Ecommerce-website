import {React, Component} from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_Categories } from './../../queries';
import './navigation-categories-style.css'

class CategoryList extends Component {
  render() {

    const isInLoction = window.location.pathname === '/' ? true : false
    const {category, setSelectedCategory} = this.props
    return (
      <Query query={GET_Categories}>
      {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
              <ul className={`category-list ${isInLoction? '':'hide'}`}>
                {
                  data.categories.map((category,id) =>{
                    return <li
                              dataname={category.name }
                              onClick={(e) =>setSelectedCategory(e)} 
                              className={`category-list-items ${category === 'clothes' ? 'selected ':''}`}
                              >{category.name}</li>
                  })
                }
              </ul>
          );
        }}
      </Query>
    );
  }
}


export default CategoryList


/* 

<li dataname='all' onClick={(e) =>setSelectedCategory(e)} className={`category-list-items ${category === 'all' ? 'selected ':''}`}>All</li>
          <li dataname='clothes' onClick={(e) =>setSelectedCategory(e)} className={`category-list-items ${category === 'clothes' ? 'selected ':''}`}>Clothes</li>
          <li dataname='tech' onClick={(e) =>setSelectedCategory(e)} className={`category-list-items ${category === 'tech' ? 'selected ':''}`}>Tech</li>

*/