import { useState } from "react";

export function useUpdatePersonalDetails(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (id, updatedData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [updateData, isLoading, error];
}
