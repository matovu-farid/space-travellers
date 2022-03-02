import { useSelector, useDispatch } from 'react-redux';
import { joinMission, activeMember } from '../../redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const missionData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

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
          {missionData.map(({
            id, name, description, reserved,
          }) => (
            <li key={id} className="li-content">
              <div className="content name">{name}</div>
              <div className="content des">{description}</div>
              <div className="content status center-container">
                {reserved ? (
                  <button
                    type="button"
                    className="btn1"
                    onClick={() => dispatch(activeMember(id))}
                  >
                    NOT A MEMBER
                  </button>
                ) : (
                  <button type="button" className="active-btn">Active Member </button>
                )}
              </div>
              <div className="content join center-container">
                {reserved ? (
                  <button
                    type="button"
                    className="btn2"
                    onClick={() => dispatch(joinMission(id))}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button type="button" className="leave-btn">
                    Leave Mission
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Missions;
