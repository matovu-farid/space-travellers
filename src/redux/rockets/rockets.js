const FETCHDATA = 'space-travellers/rockets/fetch';

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

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA: return action.payload;
    default: return state;
  }
};
export default rocketsReducer;
