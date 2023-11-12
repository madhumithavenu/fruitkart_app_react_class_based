import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/Products.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Cart from './components/cart/Cart.jsx';
import { Component } from 'react';
import Header from './components/header/Header.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleCartClearence = this.handleCartClearence.bind(this);
  }


  handleAddProduct(product) {
    const productExist = this.state.cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist) {
      this.setState({
        cartItems: this.state.cartItems.map(item => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item),
      });
    }
    else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...product, quantity: 1 }]
      });
    }
  }

  handleRemoveProduct(product) {
    const productExist = this.state.cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist.quantity === 1) {
      this.setState({
        cartItems: this.state.cartItems.filter(item => {
          return item.id !== product.id;
        })
      });
    }
    else {
      this.setState({
        cartItems: this.state.cartItems.map(item => {
          return item.id === product.id ?
            { ...productExist, quantity: productExist.quantity - 1 } :
            item
        })
      })
    }
  }

  handleCartClearence() {
    this.setState({
      cartItems: []
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header cartItems={this.state.cartItems} />
          <Routes>
            <Route exact path="/" element={<Products handleAddProduct={this.handleAddProduct} />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/cart" element={<Cart cartItems={this.state.cartItems} handleAddProduct={this.handleAddProduct} handleRemoveProduct={this.handleRemoveProduct} handleCartClearence={this.handleCartClearence} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
