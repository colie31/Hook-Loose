import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//thunk
import { setUserItems } from '../../store/userPurchases'
//componenet
import UserReview from './UserReview'
//css
import './UserPurchases.css'

//useEffect to dispatch
//dispatch a thunk function to grab users reviews
//reducer then sets state for users items
//useSelector to grabe state of users items
//display them in componenet

const UserPurchases = () => {
    
    const dispatch = useDispatch();
    useEffect(()=> {
         dispatch(setUserItems());
    }, [])

    const theUser = useSelector(state => state.userPurchases)
    const theItems = theUser.Items
    //
    console.log(theItems)
    

    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    
    let display;
    if(isEmpty(theUser)) {
        display =  <h1>No Items Purchased</h1>
    } else {
        display = (
          <div className="mainContainer purchasedItems">
            {theItems.map(item => {
              return (
                <div key={item.id} className="outerContainer">
                  <div className="imageBlock" >
                    <img
                      style={{
                        height: 100,
                        width: 120,
                        objectFit: "contain",
                      }}
                      src={item.url}
                      alt=""
                    />
                  </div>
                  <div className="infoBlock">
                    <div>{item.name}</div>
                    <UserReview itemId={item.id} />
                    <div>{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        );
    }
 
    return (
        <div>
          {display}
        </div>
    )
}

export default UserPurchases;