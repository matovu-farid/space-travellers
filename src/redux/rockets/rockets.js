const FETCHDATA = 'space-travellers/rockets/fetch';
const RESERVE = 'space-travellers/rockets/reserve';

const url = 'https://api.spacexdata.com/v3/rockets';
export const fetchData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const payload = data.map(({
    id, rocket_name: name, description, flickr_images: images,
  }) => ({
    id, name, description, images, reserved: false,
  }));
  dispatch({
    type: FETCHDATA,
    payload,
  });
};

export const reserveRocket = (payload) => ({
  type: RESERVE,
  payload,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA: return action.payload;
    case RESERVE: return state.map((rocket) => (
      rocket.id === action.payload
        ? { ...rocket, reserved: !rocket.reserved }
        : rocket));
    default: return state;
  }
};
export default rocketsReducer;
