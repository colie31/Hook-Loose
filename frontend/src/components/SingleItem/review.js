import React from 'react'
import ItemsPage from '../ItemsPage';

const Review = ({ item }) => {
    console.log(item)
    const reviews = item.Reviews
    console.log(reviews)

    let render;
    if(reviews.length) {
        console.log(reviews[0])
        render = 
        <>
        {reviews.map(anItem => {
            return (
                <div key={anItem.userId}>
                <h4>{anItem.User.username}</h4>
                <h1></h1>
                </div>
            )
        })}
        </>
    } else {
        render = <h1>No Reviews For This Item</h1>
    }

    return (
        <>
        {render}
        </>
    )
}

export default Review;