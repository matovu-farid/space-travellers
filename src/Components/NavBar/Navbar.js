import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
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
