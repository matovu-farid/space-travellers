import RocketItem from '../../Components/RocketItem/RocketItem';
import './Rockets.css';

const Rockets = () => {
  const data = [

    {
      name: 'Clean the kitchen',
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful',
      id: '1',
      image: 'https://dummyjson.com/image/i/products/1/1.jpg',
    },
    {
      name: 'Call Mom',
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful',
      id: '2',
      image: 'https://dummyjson.com/image/i/products/1/2.jpg',
    },
    {
      name: 'Water flowers',
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful',
      id: '3',
      image: 'https://dummyjson.com/image/i/products/1/1.jpg',
    },
  ];
  return (
    <div>
      <ul>
        {data.map(({
          name, description, id, image,
        }) => (
          <RocketItem key={id} name={name} description={description} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
