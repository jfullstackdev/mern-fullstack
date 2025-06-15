import PropTypes from "prop-types";
import EditableCell from "./EditableCell";
import "./TableStyles.css";

/**
 * DetailsCell component - Wrapper for EditableCell with details column data
 * @param {object} cell - The cell information from react-table
 * @param {function} updateMyData - Function to call when data is updated
 * @param {number} editingIndex - Current row being edited (if any)
 * @param {function} setEditingIndex - Function to set the editing row index
 */
const DetailsCell = ({
  cell: { value, row },
  updateMyData,
  editingIndex,
  setEditingIndex,
}) => (
  <span className="details-cell">
    <EditableCell
      value={value}
      row={row}
      updateMyData={updateMyData}
      editingIndex={editingIndex}
      setEditingIndex={setEditingIndex}
    />
  </span>
);

DetailsCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any,
    row: PropTypes.shape({
      index: PropTypes.number,
    }),
  }).isRequired,
  updateMyData: PropTypes.func.isRequired,
  editingIndex: PropTypes.number,
  setEditingIndex: PropTypes.func.isRequired,
};

export default DetailsCell;
