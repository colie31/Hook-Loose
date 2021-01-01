import React from 'react';
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//css
import './Cart.css'
//actions
import * as cartAction from '../../store/cart'

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
      <>
        <div>
          <h1>You Have {count} Items In Your Cart</h1>
          <h1>Total Cost of Cart: ${costTotal.toFixed(2)}</h1>
        </div>
        <div>
          {Object.values(cart).map((cartItem) => {
            return (
              <ul key={cartItem.item.id}>
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
                <button
                  onClick={(e) => {
                    dispatch(cartAction.removeItem(cartItem.item));
                  }}
                >
                  -
                </button>
                <li>Quantity: {cartItem.count}</li>
                <button
                  onClick={(e) => {
                    dispatch(cartAction.addItem(cartItem.item));
                  }}
                >
                  +
                </button>
                <button
                  onClick={(e) => {
                    dispatch(cartAction.deleteItem(cartItem.item));
                  }}
                >
                  Remove All
                </button>
              </ul>
            );
          })}
        </div>
        <div>
          <button
            onClick={(e) => {
              dispatch(cartAction.empty());
            }}
          >
            Empty Cart
          </button>
          <button>Purchase</button>
        </div>
      </>
    );
}

export default Cart;