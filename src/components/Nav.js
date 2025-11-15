import {NavLink} from 'react-router';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className={ ({isActive}) => (isActive ? '' : '')   }>
        home
      </NavLink>
      <NavLink to="/about">
        about
      </NavLink>
      <NavLink to="/speaking">
        speaking
      </NavLink>
    </nav>
  );
}

export default Nav;
