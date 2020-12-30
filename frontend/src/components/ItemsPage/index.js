import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
//import fetch
import { fetch } from '../../store/csrf'


//need to fetch inventory from database
//dispatch fetch( w/ thunk function)
//need to display each item w/ database
//remember buttons per item: view, add to cart
    

const ItemsPage = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    })


        const [inventory, setInventory] = useState([])

        useEffect(async () => {
            const response = await fetch('api/items');
            console.log(response.data[0])
            setInventory(response.data)
        }, []);

        
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
                                src={item.url}
                                style={{ height: 200, width: 220 }}
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