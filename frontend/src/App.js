import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header.jsx";
import Main from "./Components/main/main.jsx";
import ProductPage from "./Components/Product Page/productPage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetedProduct: "",
      selectedCategory: "all",
      arrayOfAttributes: [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  }
  
  componentDidMount() {
    this.setTargetedProduct();
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
  setSelectedCategory = (e) => {
    let category = e.target.attributes.dataname.value;
    if (window.location.pathname === "/") {
      this.setState(() => ({
        selectedCategory: category,
      }));
    }
  };

    addToCart = (item) => {
    this.setState(
      (prevState) => ({
        cart: [...prevState.cart, item],
      }),
      () => localStorage.setItem("cart", JSON.stringify(this.state.cart))
    );
  };

  updateCart = (cart) => {
    this.setState({ cart }, () => localStorage.setItem("cart", JSON.stringify(cart)));
  };

  render() {
    return (
      <>
        <Header
          selectedCategory={this.state.selectedCategory}
          setSelectedCategory={this.setSelectedCategory}
          cart={this.state.cart}
          updateCart={this.updateCart}
          id={this.state.targetedProduct}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setTargetedProduct={this.setTargetedProduct}
                SelectedCategory={this.state.selectedCategory}
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
