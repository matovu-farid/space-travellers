const FETCHMISSIONDATA = 'space-travellers/missions/fetch';

const url = 'https://api.spacexdata.com/v3/missions';
export const fetchMissionData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const payload = data.map(
    ({ mission_id: id, mission_name: name, description }) => ({
      id,
      name,
      description,
    }),
  );
  dispatch({
    type: FETCHMISSIONDATA,
    payload,
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHMISSIONDATA:
      return action.payload;

    default:
      return state;
  }
};
export default missionsReducer;
