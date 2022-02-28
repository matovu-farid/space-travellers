import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Header from '../Header/Header';

const Navbar = () => (
  <div>
    <Header />
    <ul className="nav-bar">
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
