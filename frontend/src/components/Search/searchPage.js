import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/cart';
import { Link } from 'react-router-dom';
//css
import './Search.css'

const SearchPage = () => {
    const dispatch = useDispatch();
    const foundItems = useSelector((state) => state.searchItems);

    let display;
    if(foundItems.length) {
        display = (
          <div className="searchContainer searchItems">
            {foundItems.map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <img
                        alt=""
                        className="images"
                        src={item.url}
                        style={{
                          height: 200,
                          width: 220,
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>
                      <Link to={`/items/${item.id}`}>
                        <button>View Item</button>
                      </Link>
                      <button
                        onClick={(e) => {
                          dispatch(addItem(item));
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        ); 
    } else {
        display = (
          <div className="searchContainer">
            <h1>Items Not Found</h1>
          </div>
        )
    }

    return (
        <>
        {display} 
        </>   
    )
}

export default SearchPage;
