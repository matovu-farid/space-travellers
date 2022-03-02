import React from 'react';
import renderer from 'react-test-renderer';
import TableItem from '../TableItem';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TableItem name="Rocket" />,

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
