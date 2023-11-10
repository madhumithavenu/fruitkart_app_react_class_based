
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './components/products/Products.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Cart from './components/cart/Cart.jsx';
import Header from './components/header/Header.jsx';
import { Component } from 'react';

export default class App extends Component {
 render(){
  return (
    <BrowserRouter>
      <Header cartItems={null} />
      <Routes>
      <Route exact path="/" element={<Products />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
}

