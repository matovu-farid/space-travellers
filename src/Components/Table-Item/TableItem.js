import './TableItem.css';
import propTypes from 'prop-types';

const TableItem = ({ name }) => (
  <li className="table-item">
    {name}
  </li>
);

export default TableItem;

TableItem.propTypes = {
  name: propTypes.string.isRequired,
};
