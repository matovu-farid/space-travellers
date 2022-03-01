import './RocketItem.css';
import propTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { cancelReservedRocket, reserveRocket } from '../../redux/rockets/rockets';

const RocketItem = ({
  name, description, image, reserved, id,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="rocket-item">
      <div className="rocket-image">
        <img src={image} alt={name} />
      </div>
      <div className="rocket-info">

        <p className="name">{name}</p>
        <p className="description">{description}</p>
        {(reserved) ? <button className="reserved" onClick={() => dispatch(cancelReservedRocket(id))} type="button">Cancel reservation</button>
          : <button type="button" onClick={() => dispatch(reserveRocket(id))}>Reserve Rocket</button>}

      </div>
    </li>
  );
};

RocketItem.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,

};

export default RocketItem;
