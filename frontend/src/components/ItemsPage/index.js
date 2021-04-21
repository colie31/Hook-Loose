import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//css
import './ItemsPage.css'
//action
import { addItem } from '../../store/cart'


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
            <div className='itemsContainer storeContainer'>
              {inventory.map(item => {
                  return (
                    <div className="item" key={item.id}>
                      <img
                        alt=''
                        className='images'
                        src={item.url}
                        style={{ height: 200, width: 220, objectFit: 'contain' }}
                      />
                      <div>{item.name}</div>
                      <div>{`$ ${item.price}`}</div>
                      <Link to={`/items/${item.id}`}>
                        <button>View Item</button>
                      </Link>
                        <button onClick={(e) => {dispatch(addItem(item))}}>Add To Cart</button>
                    </div>
                  );
              })}
            </div>
        );
    }

export default ItemsPage;