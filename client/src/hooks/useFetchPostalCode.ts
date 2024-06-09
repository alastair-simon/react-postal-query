import { useState, useCallback, useRef } from "react";
import { SearchType } from "../types/SearchType";

export function useFetchPostalCodeData() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchList, setSearchList] = useState<SearchType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = useCallback(
    async (
      country: string,
      postcode: string,
    ) => {
      setIsLoading(true); //state when loading
      setIsError(false); //error visible

      try {
        const res = await fetch(
          `https://api.zippopotam.us/${country}/${postcode}`
        );

        if (!res.ok) {
          throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        const id = Math.floor(Math.random() * 10000);
        const objWithId = { ...data, id };
        setSearchList((prevSearchList) => [...prevSearchList, objWithId]);
        
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, fetchData, searchList, isError, setIsError };
}
