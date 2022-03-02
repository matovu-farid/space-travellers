const FETCHMISSIONDATA = 'space-travellers/missions/fetch';
const JOINMISSION = 'space-travellers/missions/join-mission';
const ACTIVEMEMBER = 'space-travellers/missions/active-member';

const url = 'https://api.spacexdata.com/v3/missions';
export const fetchMissionData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const payload = data.map(
    ({ mission_id: id, mission_name: name, description }) => ({
      id,
      name,
      description,
      reserved: true,
    }),
  );
  dispatch({
    type: FETCHMISSIONDATA,
    payload,
  });
};

export const joinMission = (payload) => ({
  type: JOINMISSION,
  payload,
});

export const activeMember = (payload) => ({
  type: ACTIVEMEMBER,
  payload,
});

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHMISSIONDATA:
      return action.payload;
    case JOINMISSION:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: false }
        : mission));

    case ACTIVEMEMBER:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: true }
        : mission));

    default:
      return state;
  }
};
export default missionsReducer;
