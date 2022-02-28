import spacex from './spacex.png';
import './Header.css';

const Header = () => (
  <div className="header">
    <img src={spacex} className="logo" alt="Logo" />
    <h1 className="header-text">Space Traveller&apos;s Hub</h1>
  </div>
);
export default Header;
