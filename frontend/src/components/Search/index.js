import React, { useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const inventory = useSelector(state => {
        return state.inventory
    })
    // console.log(inventory)

     const search = (e) => {
       e.preventDefault();
       console.log(input);
       setInput("");
     };


    return (
      <li>
        <form onSubmit={search}>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button type="submit">Search</button>
        </form>
      </li>
    );
}

export default Search;
