import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./Components/Header/header.jsx";
import Main from "./Components/main/main.jsx";
import ProductPage from "./Components/ProductPage/productPage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetedProduct: "",
      selectedCategory: localStorage.getItem("selectedCategory") ||"all",
      arrayOfAttributes: [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  }
  
  componentDidMount() {
    if(!localStorage.getItem("USERID")){
      localStorage.setItem("USERID", uuidv4());
    }
    this.setTargetedProduct(localStorage.getItem("targetedProduct") || this.state.targetedProduct);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.arrayOfAttributes !== this.state.arrayOfAttributes) {
      
        return localStorage.setItem(
          `${this.state.arrayOfAttributes[0][0].item}`,
          JSON.stringify(this.state.arrayOfAttributes)
        );
    
    }
  }

  setTargetedProduct = (id) => {
    const Id = id;
    if (id !== undefined) localStorage.setItem("targetedProduct", Id);
    this.setState(() => ({
      targetedProduct: Id,
    }));
  };

  setSelectedCategory = (category) => {
    localStorage.setItem("selectedCategory", category);
    this.setState(() => ({
      selectedCategory: category,
    }));
  };

  addToCart = (newItem) => {
    this.setState((prevState) => {
      const cart = [...prevState.cart];
      
      const existingItemIndex = cart.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          Object.keys(item.attributes).length === Object.keys(newItem.attributes).length &&
          Object.keys(item.attributes).every(key => item.attributes[key] === newItem.attributes[key])
          
      );
      if (existingItemIndex !== -1) {
        // If item exists, update the quantity
        cart[existingItemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        cart.push(newItem);
      }

      return { cart };
    }, () => localStorage.setItem("cart", JSON.stringify(this.state.cart)));
  };
  updateCart = (cart) => {
    this.setState({ cart }, () => localStorage.setItem("cart", JSON.stringify(cart)));
  };
  clearCart = () => {
    this.setState({ cart: [] }, () => localStorage.setItem("cart", JSON.stringify([])));
  };

  render() {
    return (
      <>
        {/* <Header
          selectedCategory={this.state.selectedCategory}
          setSelectedCategory={this.setSelectedCategory}
          cart={this.state.cart}
          clearCart={this.clearCart}
          updateCart={this.updateCart}
          id={this.state.targetedProduct}
        /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setTargetedProduct={this.setTargetedProduct}
                SelectedCategory={"all"}
                addToCart={this.addToCart}
              />
            }
          />
          <Route
            path="/all"
            element={
              <Main
                setTargetedProduct={this.setTargetedProduct}
                SelectedCategory={"all"}
                addToCart={this.addToCart}
              />
            }
          />
          <Route
            path="/tech"
            element={
              <Main
                setTargetedProduct={this.setTargetedProduct}
                SelectedCategory={'tech'}
                addToCart={this.addToCart}
              />
            }
          />
          <Route
            path="/clothes"
            element={
              <Main
                setTargetedProduct={this.setTargetedProduct}
                SelectedCategory={'clothes'}
                addToCart={this.addToCart}
              />
            }
          />
          <Route
            path="/ProductPage"
            element={
              <ProductPage
                selectedProductId={this.state.targetedProduct}
                addToCart={this.addToCart}
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
