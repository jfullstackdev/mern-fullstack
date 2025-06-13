import { useState, useCallback } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DataList from "../../components/tables/DataList";
import { usePersonalDetails } from "../../hooks/PersonalDetails/usePersonalDetails";
import { useUpdatePersonalDetails } from "../../hooks/PersonalDetails/useUpdatePersonalDetails";
import useDeletePersonalDetails from "../../hooks/PersonalDetails/useDeletePersonalDetails";
import usePostPersonalDetails from "../../hooks/PersonalDetails/usePostPersonalDetails";

/**
 * PersonalDetails page component
 * Manages the data and operations for personal details
 */
function PersonalDetails() {
  // State hooks
  const [items, setItems] = usePersonalDetails("/personal-details");
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Action hooks with error states
  const [postPersonalDetails, isPosting, postError] =
    usePostPersonalDetails("/personal-details");
  const [updateData, isLoading, updateError] =
    useUpdatePersonalDetails("/personal-details");
  const [deletePersonalDetails, deleteError] =
    useDeletePersonalDetails("/personal-details");

  // Toggle modal visibility
  const toggleModal = useCallback(() => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  }, []);

  // Add a new row
  const addRow = useCallback(
    async (newRow) => {
      if (isPosting) return;

      try {
        const data = await postPersonalDetails(newRow);
        if (data) {
          setItems((oldItems) => [...oldItems, data]);
        }
        return data;
      } catch (error) {
        console.error("Error adding row:", error);
        throw error;
      }
    },
    [isPosting, postPersonalDetails, setItems],
  );

  // Update an existing row
  const updateMyData = useCallback(
    async (rowIndex, columnId, newValue) => {
      if (isLoading) return;

      setItems((old) => {
        return old.map((row, index) => {
          if (index === rowIndex) {
            const updatedRow = {
              ...old[rowIndex],
              [columnId]: newValue,
            };

            try {
              updateData(updatedRow.id, updatedRow);
            } catch (error) {
              console.error("Error updating row:", error);
            }

            return updatedRow;
          }
          return row;
        });
      });
    },
    [isLoading, updateData, setItems],
  );

  // Delete a row
  const deleteMyData = useCallback(
    async (rowIndex) => {
      const itemToDelete = items[rowIndex];

      if (!itemToDelete || !itemToDelete.id) {
        return;
      }

      try {
        const success = await deletePersonalDetails(itemToDelete.id);

        if (success) {
          setItems((old) => old.filter((_, index) => index !== rowIndex));
        }
      } catch (error) {
        console.error("Error deleting row:", error);
      }
    },
    [items, deletePersonalDetails, setItems],
  );

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Header
              as="h2"
              style={{ background: "#3399cc", color: "#fff" }}
            >
              User Profile Dashboard
            </Card.Header>
            <Card.Body>
              <DataList
                data={items}
                updateMyData={updateMyData}
                deleteMyData={deleteMyData}
                editingIndex={editingIndex}
                setEditingIndex={setEditingIndex}
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                addRow={addRow}
                postError={postError}
                updateError={updateError}
                deleteError={deleteError}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalDetails;
