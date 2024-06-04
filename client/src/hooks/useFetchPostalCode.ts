import { useState, useCallback, useRef } from "react";
import { SearchType } from "../types/SearchType";

export function useFetchPostalCodeData() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchList, setSearchList] = useState<SearchType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  // Cache search result
  const cache = useRef<{ [key: string]: SearchType }>({});

  const fetchData = useCallback(
    async (
      country: string,
      postcode: string,
      setSelected: (selected: SearchType | null) => void
    ) => {
      const cacheKey = `${country}-${postcode}`;
      if (cache.current[cacheKey]) {
        setSelected(cache.current[cacheKey]);
        return;
      }
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

        cache.current[cacheKey] = objWithId;

        setSearchList((prevSearchList) => [...prevSearchList, objWithId]);
        setSelected(objWithId);
      } catch (error) {
        setIsError(true);
        setSelected(null);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, fetchData, searchList, isError, setIsError };
}
