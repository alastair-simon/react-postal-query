import { useState, useCallback, useRef } from "react";

export function useFetchPostalCodeData() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const cache = useRef<{ [key: string]: any }>({});

  const fetchData = useCallback(async (country: string, postcode: string) => {
    const cacheKey = `${country}-${postcode}`;

    // Check if the result is in the cache
    if (cache.current[cacheKey]) {
      return cache.current[cacheKey];
    }

    setIsLoading(true); // state when loading
    setIsError(false); // reset error state
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
      return objWithId;
    } catch (error) {
      setIsError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, fetchData, isError, setIsError };
}
