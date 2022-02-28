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
    <div className="profile-table">
      <div className="mission-table">
        <h3>My Missions</h3>
        <ul>
          {missions.map((mission) => (
            <li key={mission.id}>
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets-table">
        <h3>My Rockets</h3>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
