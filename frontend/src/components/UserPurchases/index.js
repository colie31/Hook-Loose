import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//useEffect to dispatch
//dispatch a thunk function to grab users reviews
//reducer then sets state for users items
//useSelector to grabe state of users items
//display them in componenet

const UserPurchases = () => {
    const inventory = useSelector(state => state.inventory)
    const user = useSelector(state => state.session.user)

    const items = [];
    inventory.map(anItem => {
        const itemUsers = anItem.Users;
        if(itemUsers) {
            itemUsers.map(anUser => {
                if(anUser.id === user.id) {
                    items.push(anItem)
                }
            })
        }
    })

    let display;
    if(items.length) {
        display = (
            <h1>HELLO</h1>
        )
    } else {
        display = <h1>You Have Not Purchased Anything</h1>
    }


    console.log('items', items)
    return (
        <>
        {display}
        </>
    )
}

export default UserPurchases;