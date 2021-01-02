import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
//componenets
import HomePageInfo from "./components/HomePageInfo"
import ItemsPage from './components/ItemsPage'
import SingleItem from './components/SingleItem'
import Cart from './components/Cart'
import SearchPage from './components/Search/searchPage'

import { fetchInventory } from './store/item'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(()=> {dispatch(fetchInventory())}).then(() => setIsLoaded(true));
  }, [dispatch]);

  const loggedInUser = useSelector(state => {
    return state.session.user
  })
   

  return (
    <div className="homeBox">
      <div>
        <Navigation isLoaded={isLoaded} />
      </div>
      <div>
        {isLoaded && (
          <Switch>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/items/search">
              {!loggedInUser && <Redirect to="/" />}
              <SearchPage />
            </Route>
            <Route exact path="/items/:id">
              {!loggedInUser && <Redirect to="/" />}
              <SingleItem />
            </Route>
            <Route exact path="/items">
              {!loggedInUser && <Redirect to="/" />}
              <ItemsPage />
            </Route>
            <Route exact path="/cart">
              {!loggedInUser && <Redirect to="/" />}
              <Cart />
            </Route>
            <Route exact path="/">
              {loggedInUser && <Redirect to="/items" />}
              <HomePageInfo />
            </Route>
            <Route>{"404 page not found"}</Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
