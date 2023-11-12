import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listcart: {
        cartItems: null
      }
    }
  }


  render() {
    const { cartItems } = this.state.listcart;

    let totalPrice = this.props.cartItems.reduce((cost, item) => {
      return cost + (item.quantity * item.price)
    }, 0);


    return (
      <div className='cart-items'>
        <h2 className='cart-items-header'>Cart Items</h2>
        <div className='clear-cart'>
          {cartItems.length >= 1 && (
            <button className='clear-cart-button' onClick={this.props.handleCartClearence}>Clear Cart</button>
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
                <button className='cart-items-add' onClick={() => this.props.handleAddProduct(item)}>+</button>
                <button className='cart-items-remove' onClick={() => this.props.handleRemoveProduct(item)}>-</button>
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
          <div className='cart-items-total-price'> Rs.{totalPrice}</div>
        </div>
      </div>
    );
  }
}
