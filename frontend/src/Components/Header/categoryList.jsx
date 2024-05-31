import {React, Component} from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_Categories } from '../../queries';
import './navigation-categories-style.css'

class CategoryList extends Component {
  
  render() {

    const {selectedCategory, setSelectedCategory} = this.props
    return (
      <Query query={GET_Categories}>
      {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
              <ul className={`category-list `}>
                {
                  data.categories.map((category) =>{
                    return <li
                              dataname={category.name }
                              onClick={(e) =>setSelectedCategory(e)} 
                              className={`category-list-items ${category.name === selectedCategory ? 'selected ':''}`}
                              data-testid={category.name === selectedCategory ? 'active-category-link' : 'category-link'}
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
