import { useState, useCallback } from "react";
import { fetchPostalCodeData } from "../services/apiService";

export function useFetchPostalCodeData() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (country, postcode) => {
    setIsLoading(true);
    try {
      const res = await fetchPostalCodeData(country, postcode);
      setData(res);
      setIsLoading(false);
    } catch (error) {
      setData(null);
      setIsLoading(false);
    }
  }, []);

  return { isLoading, data, fetchData };
}
