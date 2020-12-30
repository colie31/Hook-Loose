import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
//componenets
import HomePageInfo from "./components/HomePageInfo"
import ItemsPage from './components/ItemsPage'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
            <Route exact path="/items">
              <ItemsPage />
            </Route>
            <Route exact path="/">
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
