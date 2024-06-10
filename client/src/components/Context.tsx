import React, { createContext, useState, ReactNode } from "react";
import { SearchType } from "../types/SearchType";

// Context type
export type SearchContextType = {
  searchResults: SearchType[] | null;
  setSearchResults: React.Dispatch<React.SetStateAction<SearchType[]>>;
}

// Initial context value
const initialContextValue: SearchContextType = {
  searchResults: [],
  setSearchResults: () => {}, 
};

export const SearchContext = createContext(initialContextValue);

//Search provider type
type propsType = {
  children: ReactNode;
}

export function SearchProvider({ children }: propsType) {

  const [searchResults, setSearchResults] = useState<SearchType[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
