import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/Products.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Cart from './components/cart/Cart.jsx';
import { Component, useState } from 'react';
import Header from './components/header/Header.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     listcart:{
      cartItems: null, 
      setCartItems: null
   }
 }
}
 

  handleAddProduct(product) {
    const productExist = this.cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist) {
      this.setCartItems(this.cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity + 1 } :
          item;
      }))
    }
    else {
      this.setCartItems([this.cartItems, { ...product, quantity: 1 }]);
    }
  }

  handleRemoveProduct(product) {
    const productExist = this.cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist.quantity === 1) {
      this.setCartItems(this.cartItems.filter(item => {
        return item.id !== product.id;
      }));
    }
    else {
      this.setCartItems(this.cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity - 1 } :
          item
      }))
    }
  }

  handleCartClearence() {
    this.setCartItems([]);
  }
 render(){
  const {cartItems, setCartItems}=  this.state.listcart;
  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<Products handleAddProduct={this.handleAddProduct.bind(this)} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={this.handleAddProduct.bind(this)} handleRemoveProduct={this.handleRemoveProduct.bind(this)} handleCartClearence={this.handleCartClearence.bind(this)} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
}
