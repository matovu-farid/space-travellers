import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketItem from '../RocketItem';
import store from '../../../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>

        <RocketItem
          id={1}
          name="Falcon 1"
          description="Great rocket"
          image="https://imgur.com/DaCfMsj.jpg"
          reserved
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
