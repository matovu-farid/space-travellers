import './Missions.css';

const Missions = () => {
  const missions = [
    {
      name: 'Thaicom',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis beatae quia doloribus delectus consequatur quidem, provident explicabo ab quisquam!',
      id: 1,
      status: 'NOT A MEMBER',
      join: 'Join Mission',
    },
    {
      name: 'Tesla',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis beatae quia doloribus delectus consequatur quidem, provident explicabo ab quisquam!',
      id: 2,
      status: 'NOT A MEMBER',
      join: 'Join Mission',
    },
    {
      name: 'Iriduim Next',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis beatae quia doloribus delectus consequatur quidem, provident explicabo ab quisquam!',
      id: 3,
      status: 'NOT A MEMBER',
      join: 'Join Mission',
    },
    {
      name: 'Commercial Resupply Services',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis beatae quia doloribus delectus consequatur quidem, provident explicabo ab quisquam!',
      id: 4,
      status: 'NOT A MEMBER',
      join: 'Join Mission',
    },
  ];

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
          {missions.map((mission) => (
            <li key={mission.id} className="li-content">
              <div className="content name">{mission.name}</div>
              <div className="content des">{mission.description}</div>
              <div className="content status">
                <button type="button">{mission.status}</button>
              </div>
              <div className="content join">
                <button type="button">{mission.join}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Missions;
