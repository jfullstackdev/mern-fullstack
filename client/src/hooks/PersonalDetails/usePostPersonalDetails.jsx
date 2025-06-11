import { useState } from "react";

function usePostPersonalDetails(apiEndpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postPersonalDetails = async (newRow) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRow),
      });

      if (!response.ok) {
        throw new Error("Failed to add row");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [postPersonalDetails, isLoading, error];
}

export default usePostPersonalDetails;
