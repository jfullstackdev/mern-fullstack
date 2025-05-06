// useDeletePersonalDetails.js
import { useState } from 'react';

const useDeletePersonalDetails = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePersonalDetails = async (id) => {
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
      }

      setIsLoading(false);
      return true;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return false;
    }
  };

  // Return error as null instead of isLoading to avoid the race condition
  return [deletePersonalDetails, error];
};

export default useDeletePersonalDetails;