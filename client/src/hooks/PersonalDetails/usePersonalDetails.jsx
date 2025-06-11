import { useState, useEffect } from "react";

export function usePersonalDetails(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return [data, setData];
}
