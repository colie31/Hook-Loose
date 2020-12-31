import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//import fetch
import { fetch } from "../../store/csrf";
import BeautyStars from "beauty-stars";
//css
import './SingleItem.css'


//need to fetch inventory from database
//dispatch fetch( w/ thunk function)
//need to display each item w/ database
//remember buttons per item: view, add to cart

const SingleItem = () => {
  const urlInformation = useParams();
  const itemId = parseInt(urlInformation.id);

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
          <div></div>
        </div>
      )}
    </>
  );
};

export default SingleItem;
