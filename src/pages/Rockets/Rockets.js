import { useSelector } from 'react-redux';
import RocketItem from '../../Components/RocketItem/RocketItem';

const Rockets = () => {
  const data = useSelector((state) => state.rockets);
  return (
    <div>
      <ul>
        {data.map(({
          name, description, id, images, reserved,
        }) => (
          <RocketItem
            key={id}
            id={id}
            name={name}
            description={description}
            image={images[0]}
            reserved={reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
