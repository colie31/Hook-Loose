import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
//pics
// import Logo from './pics/logos/logo1.png'
import Logo2 from './pics/logos/logo2.jpg'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className='homeBox'>
      <div className='logoBox'>
        <img className='logo' src={Logo2} ></img>
      </div>
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
