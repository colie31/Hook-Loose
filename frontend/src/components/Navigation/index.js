import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
// included
import logo from '../../pics/logos/logo2.jpg'
import HomePageInfo from '../HomePageInfo/index'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const bottomForm = <HomePageInfo />
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  

  return (
    <>
    <ul>
      <li>
        <NavLink exact to="/">
          <img src={logo} style={{ height: 200, width: 300 }}></img>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    {!sessionUser && bottomForm}
    </>
  );
}

export default Navigation;