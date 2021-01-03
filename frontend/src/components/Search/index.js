import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//action
import { searchItems } from '../../store/search'
import { useHistory } from 'react-router-dom'


const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const inventory = useSelector(state => {
    return state.inventory
  })

  const [input, setInput] = useState('');

  const search = (e) => {
    e.preventDefault();
    let searchWords = input.split(' ')
    let string = '' 
    searchWords.forEach(word => {
    string += `(?=.*${word}*)`;
    })
    let re = new RegExp(string, 'i')
    console.log(re)
    //searching through inventory
    const foundInventory = inventory.filter(item => {
      return re.test(item.name) || re.test(item.description);
    })
    
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
