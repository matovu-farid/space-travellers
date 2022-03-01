import { useSelector } from 'react-redux';
import './Missions.css';

const Missions = () => {
  const missionData = useSelector((state) => state.missions);

  return (
    <div className="main-container">
      <div className="table-container">
        <ul className="ul-container">
          <div className="header-container">
            <h3 className="h-name n">Mission</h3>
            <h3 className="h-des n">Description</h3>
            <h3 className="h-status n">Status</h3>
            <h3 className="h-join n">|</h3>
          </div>
          {missionData.map(({ id, name, description }) => (
            <li key={id} className="li-content">
              <div className="content name">{name}</div>
              <div className="content des">{description}</div>
              <div className="content status center-container">
                <button type="button" className="btn1">NOT A MEMBER</button>
              </div>
              <div className="content join center-container">
                <button type="button" className="btn2">Join mission</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Missions;
