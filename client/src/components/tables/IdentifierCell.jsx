import PropTypes from "prop-types";
import "./TableStyles.css";

/**
 * IdentifierCell component - Displays the identifier value (non-editable)
 * @param {object} cell - The cell information from react-table
 */
const IdentifierCell = ({ cell: { value } }) => (
  <span className="identifier-cell">{value}</span>
);

IdentifierCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any,
  }).isRequired,
};

export default IdentifierCell;
