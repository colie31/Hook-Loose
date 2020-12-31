import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
//import fetch
import { fetch } from '../../store/csrf'
//thunk action
import { fetchInventory } from '../../store/item';
import './ItemsPage.css'


//need to fetch inventory from database
//dispatch thunk function
//need to display each item w/ database
//remember buttons per item: view, add to cart
    

const ItemsPage = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => {
        return state.session.user;
    })
    const inventory = useSelector(state => state.inventory)

        
        //defensive coding
        if (!loggedInUser) return null;


        return (
            <>
                <h1>Welcome {loggedInUser.username}</h1>
                <div>
                    {inventory.map(item => {
                        return (
                          <div key={item.id}>
                            <div>
                              <img
                                className='images'
                                src={item.url}
                                style={{ height: 200, width: 220, objectFit: 'contain' }}
                              />
                            </div>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div>
                            <Link to={`/items/${item.id}`}>
                              <button>View Item</button>
                            </Link>
                              <button onClick={(e) => {}}>Add To Cart</button>
                            </div>
                          </div>
                        );
                    })}
                </div>
            </>
        );
    }

export default ItemsPage;