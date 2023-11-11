import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
      listcart:{
        cartItems: null,
         handleAddProduct: null,
         handleRemoveProduct: null,
         handleCartClearence: null
      }
 }
}
   totalPrice = this.cartItems.reduce((price, item) => {
    return price + (this.item.quantity * this.item.price)
  }, 0);

  render(){
  const {cartItems} = this.state.listcart;

  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>Cart Items</h2>
      <div className='clear-cart'>
        {cartItems.length >= 1 && (
          <button className='clear-cart-button' onClick={this.handleCartClearence}>Clear Cart</button>
        )}
      </div>
      {cartItems.length === 0 &&
        <div className='cart-items-empty'>
          No items are added in the cart
        </div>}
      <div>
        {cartItems.map(item => {
          return (<div key={item.id} className="cart-items-list">
            <img className="cart-item-image"
              src={item.image}
              alt={item.name} />
            <div className='cart-items-name'>
              {item.name}
            </div>
            <div className='cart-items-function'>
              <button className='cart-items-add' onClick={() => this.handleAddProduct(item)}>+</button>
              <button className='cart-items-remove' onClick={() => this.handleRemoveProduct(item)}>-</button>
            </div>
            <div className='cart-items-price'>
              {item.quantity} x Rs.{item.price}
            </div>
          </div>
          );
        })
        }
      </div>
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'> Rs.{this.cartItems.reduce((price, item) => {
    return price + (this.item.quantity * this.item.price)
  }, 0)}</div>
      </div>
    </div>
  );
}
}
