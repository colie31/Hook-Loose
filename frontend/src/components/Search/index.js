import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//action
import { searchItems } from '../../store/search'
import { Redirect, useHistory } from 'react-router-dom'


const Search = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const inventory = useSelector(state => {
        return state.inventory
    })

     const search = (e) => {
       e.preventDefault();
       let searchWords = input.split(' ')
       let string = '' 
       searchWords.forEach(word => {
        string += `(?=.*${word}.?)`;
       })
       let re = new RegExp(string, 'i')
       console.log(re)
       //searching through inventory
       const foundInventory = inventory.filter(item => {
         return re.test(item.name)
       })
      //  inventory.map(item => console.log(re.test(item.name)))
       console.log('found', foundInventory)
       dispatch(searchItems(foundInventory))

       setInput('');
       history.push('/items/search')
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
