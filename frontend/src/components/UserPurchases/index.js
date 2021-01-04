import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//thunk
import { setUserItems } from '../../store/userPurchases'
//componenet
import UserReview from './UserReview'

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
    console.log(theUser)
    // const user = useSelector(state => state.session.user)
    

    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    
    let display;
    if(isEmpty(theUser)) {
        display =  <h1>No Items Purchased</h1>
    } else {
        display = (
            <>
            <h1>Purchases and Reviews</h1>
            {theUser.items.map(anItem => {
                return (
                  <div key={anItem.id}>
                    <div>
                      <img
                        src={anItem.url}
                        alt=""
                        style={{
                          height: 100,
                          width: 120,
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div>{anItem.name}</div>
                    <UserReview itemId={anItem.id}/>
                  </div>
                );
            })}
            </>
        )
    }
 
    return (
        <div>
        {display}
        </div>
    )
}

export default UserPurchases;