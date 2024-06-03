import { useState, useCallback } from "react";
import { fetchPostalCodeData } from "../services/apiService";

export function useFetchPostalCodeData() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const fetchData = useCallback(async (country, postcode, setSelected) => {
    setIsLoading(true);
    try {
      const res = await fetchPostalCodeData(country, postcode);
      const id = Math.floor(Math.random() * 10000);
      const objWithId = {
        ...res,
        id: id
      }
      setSearchList((prevSearchList) => [...prevSearchList, objWithId]);
      setIsLoading(false);
      setSelected(objWithId)
    } catch (error) {
      setIsLoading(false);
      if (setSelected) {
        setSelected(null);
      }
    }
  }, []);

  return { isLoading, fetchData, searchList };
}
