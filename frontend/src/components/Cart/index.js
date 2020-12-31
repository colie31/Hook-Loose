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

    return (
        <>
        <div>
            <h1>You Have {count} Items In Your Cart</h1>
        </div>
        <div>
        {Object.values(cart).map(cartItem => {
            return (
              <ul>
                <li key={cartItem.item.id}>{cartItem.item.name}</li>
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
                onClick={
                    (e) => {dispatch(cartAction.addItem(cartItem.item))}
                }>+</button>
                <li>Quantity: {cartItem.count}</li>
                <button
                onClick={
                    (e) => {dispatch(cartAction.removeItem(cartItem.item))}
                }>-</button>
                <button
                onClick={
                    (e) => {dispatch(cartAction.deleteItem(cartItem.item))}
                }>Remove All</button>
              </ul>
            );
        })}
        </div>
        <div>
        <button></button>
        <button></button>
        </div>
        </>
    )
}

export default Cart;