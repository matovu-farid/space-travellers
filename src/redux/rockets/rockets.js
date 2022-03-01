const FETCHDATA = 'space-travellers/rockets/fetch';

export const fetchData = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/rocket';
  const response = await fetch(url);
  const data = await response.json();
  const payload = data.map(({
    id, rocket_name: name, description, flickr_images: images,
  }) => ({
    id, name, description, images,
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
