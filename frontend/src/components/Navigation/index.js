import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//componenets
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import DemoLogin from '../DemoLogin'
import Search from '../../components/Search'
// css
import './Navigation.css';
// pics
import logo from '../../pics/logos/logo3.png'





function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
   const cart = useSelector((state) => {
     return state.cart;
   });

   let count = Object.values(cart).reduce((accumulator, value) => {
     return accumulator + value.count;
   }, 0);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <DemoLogin />
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <>
      <nav className="nav-wrapper">
        <ul>
          <li>
            <NavLink exact to="/">
              <img
                alt=""
                src={logo}
                style={{ height: 200, width: 330, objectFit: "contain" }}
              ></img>
            </NavLink>
          </li>
          <li>{isLoaded && sessionLinks}</li>
          {sessionUser && (
            <>
              <h3>Welcome {sessionUser.username}</h3>
              <Search />
              <li>
                <Link to="/items">Shop</Link>
              </li>
              <li id="cartLink">
                <Link to="/cart">My Cart ({count})</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;