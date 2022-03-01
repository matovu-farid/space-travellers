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
          {missionData.map((mission) => (
            <li key={mission.id} className="li-content">
              <div className="content name">{mission.name}</div>
              <div className="content des">{mission.description}</div>
              <div className="content status center-container">
                <button type="button" className="btn1">
                  {}
                </button>
              </div>
              <div className="content join center-container">
                <button type="button" className="btn2">
                  {}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Missions;
