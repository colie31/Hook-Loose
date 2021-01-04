import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const UserReview = ({ itemId }) => {
    const theUser = useSelector(state => state.userPurchases)
    const review = theUser.Reviews.find(review => {
        return review.itemId === itemId;
    })
    console.log(review)

    const [boolean, setBoolean] = useState(true)
    const [comment, setComment] = useState()


    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('hi');
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <label>Your Review</label>
          <textarea
          disabled={'disabled'}
          value={comment}
          onChange={(e) => {setComment(e.target.value)}}></textarea>
          <button onClick={(e)=> {setBoolean(!boolean)}}>Add/Edit</button>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
}

export default UserReview;