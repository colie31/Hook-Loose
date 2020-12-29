import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
//componenets


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
            {/* <Route path="/login" >
              <LoginFormPage />
            </Route> */}
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;
