import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header.jsx";
import Main from "./Components/main/main.jsx";
import ProductPage from "./Components/Product Page/ProductPage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetedProduct: "",
      selectedCategory: "all",
      arrayOfAttributes: [],
      cart: [],
    };
  }
  componentWillUnmount() {}
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
  setSelectedAttributes = (array) => {
    this.setState(() => ({
      arrayOfAttributes: [array],
    }));
  };
  addToCart = (item) => {
    this.setState((prev) => ({
      cart: [...prev.cart, item],
    }));
  };

  render() {
    return (
      <>
        <Header
          selectedCategory={this.state.selectedCategory}
          setSelectedCategory={this.setSelectedCategory}
          arrayOfAttributes={this.state.arrayOfAttributes}
          selectedProductId={this.state.targetedProduct}
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
                setSelectedAttributes={this.setSelectedAttributes}
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
