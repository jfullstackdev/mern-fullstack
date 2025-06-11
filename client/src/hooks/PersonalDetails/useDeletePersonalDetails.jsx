import { useState } from "react";

const useDeletePersonalDetails = (url) => {
  const [error, setError] = useState(null);

  const deletePersonalDetails = async (id) => {
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Network response was not ok: ${response.status} - ${errorText}`,
        );
      }

      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  // Return error as null instead of isLoading to avoid the race condition
  return [deletePersonalDetails, error];
};

export default useDeletePersonalDetails;
