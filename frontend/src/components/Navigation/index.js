import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//componenets
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from '../../components/Search'
// css
import './Navigation.css';
// pics
import logo from '../../pics/logos/logo3.png'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
              {sessionUser && <h3>Welcome {sessionUser.username}</h3>}
              <Search />
              <li>
                <Link to="/items">Shop</Link>
              </li>
              <li>
                <Link to="/cart">My Cart</Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="material-icons">shopping_cart</i>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;