import TableItem from '../../Components/Table-Item/TableItem';
import './MyProfile.css';

const MyProfile = () => {
  const missions = [
    {
      name: 'Russia',
      id: '1',
    },
    {
      name: 'Norway',
      id: '2',
    },
    {
      name: 'Canada',
      id: '3',
    },
    {
      name: 'Mexico',
      id: '4',
    },
    {
      name: 'Cuba',
      id: '5',
    },
  ];
  const rockets = [
    {
      name: 'Tesla',
      id: '1',
    },
    {
      name: 'Andromeda',
      id: '2',
    },
    {
      name: 'Blue moon',
      id: '3',
    },
  ];
  return (
    <div className="center-container">

      <div className="profile-table table">
        <div className="mission-table">
          <h3>My Missions</h3>
          <ul>
            {missions.map(({ name, id }) => (
              <TableItem name={name} key={id} />
            ))}
          </ul>
        </div>
        <div className="rockets-table table">
          <h3>My Rockets</h3>
          <ul>
            {rockets.map(({ name, id }) => (
              <TableItem name={name} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
