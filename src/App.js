import {React, Component} from 'react'
import './App.css';
import Header from './Components/Navigation/header.jsx';
import Category from './Components/categoryPage/category.jsx';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Category />
      </>
    );
  }
}

export default App;