import './RocketItem.css';
import propTypes from 'prop-types';

const RocketItem = ({
  name, description, image, reserved,
}) => (
  <li className="rocket-item">
    <div className="rocket-image">
      <img src={image} alt={name} />
    </div>
    <div className="rocket-info">

      <p className="name">{name}</p>
      <p className="description">{description}</p>
      {(reserved) ? <button className="reserved" type="button">Cancel reservation</button>
        : <button type="button">Reserve Rocket</button>}

    </div>
  </li>
);

RocketItem.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,

};

export default RocketItem;
