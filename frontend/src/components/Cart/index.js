import React from 'react';
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//css
import './Cart.css'
//actions
import * as cartAction from '../../store/cart'
//thunk
import { purchase } from '../../store/cart'

const Cart = () => {
    const dispatch = useDispatch();
    //get global state
    const cart = useSelector(state => {
        return state.cart
    })
    
    let count = Object.values(cart).reduce((accumulator, value)=> {
        return accumulator + value.count
    }, 0);

     let costTotal = Object.values(cart).reduce((accumulator, value) => {
       return accumulator + (Number(value.item.price) * value.count);
     }, 0);
     

    return (
      <div className="container">
        <div className="cartInfo">
          <div className="cartDiv">You Have {count} Items In Your Cart</div>
          <div lassName="cartDiv">
            Total Cost of Cart: ${costTotal.toFixed(2)}
          </div>
        </div>
        <div>
        {Object.values(cart).map((cartItem) => {
          return (
            <div className="outContainer">
              <ul className="cartItems" key={cartItem.item.id}>
                <li>{cartItem.item.name}</li>
                <li>
                  <Link to={`/items/${cartItem.item.id}`}>
                    <img
                      style={{ height: 100, width: 120, objectFit: "contain" }}
                      src={cartItem.item.url}
                      alt=""
                    />
                  </Link>
                </li>
                <li>Price: ${cartItem.item.price}</li>
                <div>
                  <button
                    className="itemButton"
                    onClick={(e) => {
                      dispatch(cartAction.removeItem(cartItem.item));
                    }}
                  >
                    -
                  </button>
                </div>
                <li>Quantity: {cartItem.count}</li>
                <div>
                  <button
                    className="itemButton"
                    onClick={(e) => {
                      dispatch(cartAction.addItem(cartItem.item));
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="itemButton"
                    onClick={(e) => {
                      dispatch(cartAction.deleteItem(cartItem.item));
                    }}
                  >
                    Remove All
                  </button>
                </div>
              </ul>
            </div>
          );
          })}
        </div>
        <div className="bottomButtons">
          <button
            onClick={(e) => {
              dispatch(cartAction.empty());
            }}
          >
            Empty Cart
          </button>
          <button
            onClick={(e) => {
              dispatch(purchase(cart));
            }}
          >
            Purchase
          </button>
        </div>
      </div>
    );
}

export default Cart;