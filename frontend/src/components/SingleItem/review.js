import React from 'react'
// import ItemsPage from '../ItemsPage';
import BeautyStars from "beauty-stars";
import './SingleItem.css'

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
              <div 
              key={anItem.userId}
              className='commentContainer'>
                <div className='user'>
                    <h4>{anItem.User.username} says:</h4>
                    <BeautyStars
                    value={item.rating}
                    editable={false}
                    className="innerSold"
                    // onChange={}
                    />
                </div>
                <h1>"{anItem.comment}"</h1>
              </div>
            );
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