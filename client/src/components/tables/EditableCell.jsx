import PropTypes from "prop-types";
import "./TableStyles.css";

/**
 * EditableCell component - Renders either an input field (when editing) or a static value
 * @param {any} value - The cell value to display
 * @param {object} row - The row object from react-table
 * @param {function} updateMyData - Function to call when data is updated
 * @param {number} editingIndex - Current row being edited (if any)
 * @param {function} setEditingIndex - Function to set the editing row index
 */
function EditableCell({
  value,
  row,
  updateMyData,
  editingIndex,
  setEditingIndex,
}) {
  const isEditing = row.index === editingIndex;

  return isEditing ? (
    <input
      className="editable-cell-input"
      defaultValue={value}
      autoFocus
      onBlur={(e) => {
        updateMyData(row.index, "details", e.target.value);
        setTimeout(() => setEditingIndex(null), 100);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          updateMyData(row.index, "details", e.target.value);
          setEditingIndex(null);
        } else if (e.key === "Escape") {
          setEditingIndex(null);
        }
      }}
    />
  ) : (
    <div className="cell-content">{value}</div>
  );
}

EditableCell.propTypes = {
  value: PropTypes.any.isRequired,
  row: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  updateMyData: PropTypes.func.isRequired,
  editingIndex: PropTypes.number,
  setEditingIndex: PropTypes.func.isRequired,
};

export default EditableCell;
