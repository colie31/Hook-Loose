import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BeautyStars from "beauty-stars";
//css
import './SingleItem.css'
//componenets
import Review from './review'
//actions
import { addItem } from "../../store/cart";


//need to fetch inventory from database
//dispatch fetch( w/ thunk function)
//need to display each item w/ database
//remember buttons per item: view, add to cart

const SingleItem = () => {
  const dispatch = useDispatch();
  const urlInformation = useParams();
  const itemId = parseInt(urlInformation.id);
  const [showReview, setShowReview] = useState(false)
  //this is for the add comment functionality
  //not implemented yet :)
  const [active, setActive] = useState(false)

  // const loggedInUser = useSelector((state) => {
  //   return state.session.user;
  // })

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
  // if (!loggedInUser) return null;

  return (
    <>
      {item && (
        <div className="container">
          <div className="imageContainer">
            <img
              src={item.url}
              style={{ height: 500, width: 520, objectFit: "contain" }}
            />
          </div>
          <div className="infoContainer">
            <div className="soldContainer">
              <div className="innerSold">{item.amountSold} Sales</div>
              <div className="innerSold">|</div>
              <BeautyStars
                value={item.rating}
                editable={false}
                className="innerSold"
                // onChange={}
              />
            </div>
            <div>
              <h1>{item.name}</h1>
            </div>
            <div>Price ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button
              className="addButton"
              onClick={(e) => {
              dispatch(addItem(item));
              }}
            >
              Add To Cart
            </button>
            <div className="descriptionBox">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setShowReview(!showReview);
        }}
      >
        Reviews
      </button>
      {showReview && <Review item={item} />}
    </>
  );
};

export default SingleItem;
