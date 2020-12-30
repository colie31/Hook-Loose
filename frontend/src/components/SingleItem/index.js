import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
//import fetch
import { fetch } from "../../store/csrf";

//need to fetch inventory from database
//dispatch fetch( w/ thunk function)
//need to display each item w/ database
//remember buttons per item: view, add to cart

const SingleItem = () => {
  const urlInformation = useParams();
  console.log(urlInformation);

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const [item, setItem] = useState(null);

  useEffect(async () => {
    const response = await fetch("/api/items");
    const allItems = response.data;
    const itemId = parseInt(urlInformation.id);
    const theItem = allItems.find((anItem)=> {
        return anItem.id === itemId
    })
    setItem(theItem);
  }, []);

  //defensive coding
  if (!loggedInUser) return null;
  console.log(item)

  return (
    <>
      {item && <h1>{item.name}</h1>}
    </>
  );
};

export default SingleItem;
