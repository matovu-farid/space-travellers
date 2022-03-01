const FETCHMISSIONDATA = 'space-travellers/missions/fetch';
// const RESERVE = 'space-travellers/missions/reserve';
// const CANCELRESERVATION = 'space-travellers/missions/cancel-reservation';

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

// export const reserveRocket = (payload) => ({
//   type: RESERVE,
//   payload,
// });
// export const cancelReservedRocket = (payload) => ({
//   type: CANCELRESERVATION,
//   payload,
// });

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHMISSIONDATA:
      return action.payload;

    default:
      return state;
  }
};
export default missionsReducer;
