import { createContext, useState, ReactNode } from "react";
import { SearchType } from "../types/SearchType";

// Context type
export type SearchContextType = {
  searchResults: SearchType[] | null;
  setSearchResults: React.Dispatch<React.SetStateAction<SearchType[]>>;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
};

// Initial context value
const initialContextValue: SearchContextType = {
  searchResults: [],
  setSearchResults: () => {},
  selected: null,
  setSelected: () => {},
};

export const SearchContext = createContext(initialContextValue);

//Search provider type
type propsType = {
  children: ReactNode;
}

export function SearchProvider({ children }: propsType) {
  const [searchResults, setSearchResults] = useState<SearchType[]>([]);
  const [selected, setSelected] = useState<number | null >(null);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, selected, setSelected }}>
      {children}
    </SearchContext.Provider>
  );
};
