import { useSelector } from 'react-redux';
import TableItem from '../../Components/Table-Item/TableItem';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    ({ reserved }) => reserved,
  );
  const missions = useSelector((state) => state.missions).filter(
    ({ reserved }) => reserved,
  );
  return (
    <div className="center-container">
      <div className="profile-table table">
        <div className="mission-table">
          <h3>My Missions</h3>
          <ul>
            {missions.map(({ name, id }) => (
              <li className="table-item" key={id}>
                {name}
              </li>
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
