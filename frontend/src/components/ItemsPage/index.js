import React from 'react';
import { NavLink } from 'react-router-dom';
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
            console.log(response)
        }, []);
        
        //defensive coding
        if (!loggedInUser) return null;

        return (
            <>
                <h1>Welcome {loggedInUser.username}</h1>
            </>
        );
    }

export default ItemsPage;