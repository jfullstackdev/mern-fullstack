import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * AddRowModal component - Modal dialog for adding new rows
 * @param {function} addRow - Function to add a new row
 */
function AddRowModal({ addRow }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({ identifier: "", details: "" });
  const [validationError, setValidationError] = useState("");

  const openModal = () => {
    setValidationError("");
    setNewItem({ identifier: "", details: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
    if (validationError) setValidationError("");
  };

  const validateForm = () => {
    if (!newItem.identifier.trim()) {
      setValidationError("Identifier is required");
      return false;
    }
    if (!newItem.details.trim()) {
      setValidationError("Details are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await addRow(newItem);
      setNewItem({ identifier: "", details: "" });
      closeModal();
    } catch (error) {
      setValidationError(`Error adding record: ${error.message}`);
    }
  };

  return (
    <div>
      <Button
        className="add-row-btn btn btn-primary"
        onClick={openModal}
        aria-label="Add new record"
      >
        <span aria-hidden="true">➕</span>
      </Button>

      <Modal show={isModalOpen} onHide={closeModal} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {validationError && <Alert variant="danger">{validationError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Identifier</Form.Label>
              <Form.Control
                type="text"
                name="identifier"
                value={newItem.identifier}
                onChange={handleInputChange}
                placeholder="Enter identifier"
                aria-label="Identifier"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="text"
                name="details"
                value={newItem.details}
                onChange={handleInputChange}
                placeholder="Enter details"
                aria-label="Details"
              />
            </Form.Group>
            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="secondary"
                onClick={closeModal}
                className="me-2"
                aria-label="Cancel"
              >
                <span aria-hidden="true">✖️</span>
              </Button>
              <Button variant="primary" type="submit" aria-label="Add Record">
                <span aria-hidden="true">✔️</span>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

AddRowModal.propTypes = {
  addRow: PropTypes.func.isRequired,
};

export default AddRowModal;
