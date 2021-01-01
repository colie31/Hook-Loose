import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BeautyStars from "beauty-stars";
//css
import './SingleItem.css'
//componenets
import Review from './review'


//need to fetch inventory from database
//dispatch fetch( w/ thunk function)
//need to display each item w/ database
//remember buttons per item: view, add to cart

const SingleItem = () => {
  const urlInformation = useParams();
  const itemId = parseInt(urlInformation.id);
  const [showReview, setShowReview] = useState(false)
  const [active, setActive] = useState(false)

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  })

  const item = useSelector(state => {
    const allItems = state.inventory;
    return allItems.find((anItem)=> {
        console.log(anItem.id)
        return anItem.id === itemId;
    })
  });

  // const [item, setItem] = useState(null);

  // useEffect(async () => {
  //   const response = await fetch("/api/items");
  //   const allItems = response.data;
  //   const itemId = parseInt(urlInformation.id);
  //   const theItem = allItems.find((anItem)=> {
  //       return anItem.id === itemId
  //   })
  //   setItem(theItem);
  // }, []);

  //defensive coding
  if (!loggedInUser) return null;

  return (
    <>
      {item && (
        <div className="container">
          <div>
            <h1>{item.name}</h1>
          </div>
          <div className="imageContainer">
            <img
              src={item.url}
              style={{ height: 500, width: 520, objectFit: "contain" }}
            />
          </div>
          <BeautyStars
            value={item.rating}
            editable={false}
            // onChange={}
          />
          <div>Amount Sold: {item.amountSold}</div>
          <div>Price ${item.price}</div>
          <div>Quantity: {item.quantity}</div>
          <div className='descriptionBox'>
            <p>{item.description}</p>
          </div>
          <button
          onClick={
            () => {setShowReview(!showReview)}
          }>Reviews</button>
          {showReview && <Review item={item} />}
        </div>
      )}
    </>
  );
};

export default SingleItem;
