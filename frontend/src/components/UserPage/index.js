import React from 'react';
import { NavLink } from 'react-dom-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'redux'
//import thunk function


//need to fetch inventory from database
//dispatch fetch( w/ thunk function)
//need to display each item w/ database
//remember buttons per item: view, add to cart
const inventoryTemp = [
  {
    name: "Beige Tall Cup Cozy", //string
    amountSold: 12, //integer
    description:
      "Handmade cup cozy that fits your everyday tall cups. Recommend handwashing product. Made with Lion Brand yarn.", //text
    price: 4.5, //decimal
    rating: 4.0,
    quantity: 10, //integer
    url: "https://hookpics.s3.us-east-2.amazonaws.com/Beige+tall+cup+cozy", //string
  },
  {
    name: "Beige-Grey Long Scarf", //string
    amountSold: 20, //integer
    description:
      'Handmade 20" scarf, great for winter weather or pair with any outfit. Recommend handwashing product.', //text
    price: 18.0, //decimal
    rating: 4.5,
    quantity: 10, //integer
    url: "https://hookpics.s3.us-east-2.amazonaws.com/Beige-Grey+long+scarf", //string
  },
  {
    name: "Blue-Green Infinity Scarf", //string
    amountSold: 17, //integer
    description:
      "Handmade infinity scarf, great for winter weather or pair with any outfit. Recommend handwashing product.", //text
    price: 15.5, //decimal
    rating: 4.0,
    quantity: 10, //integer
    url:
      "https://hookpics.s3.us-east-2.amazonaws.com/Blue-Green+infinity+scarf", //string
  },
];

const UserPage = () => {
    const dispatch = useDispatch();
    //fetch w/ thunk function
    


    return (
        <>

        </>
    )
}

export default UserPage;