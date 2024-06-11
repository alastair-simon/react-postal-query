import { useContext } from "react";
//components
import { SearchContext } from "../../components/Context";
import SearchListItem from "../SearchListItem/SearchListItem";

export default function SearchList() {
  const { searchResults, selected, setSelected } = useContext(SearchContext);

  return (
    <div>
      <h2 className="text-locaMed mb-[4px]">Searches</h2>
      {searchResults?.length === 0 ? (
        <p className="text-locaMidLight text-[16px]">No searches yet</p>
      ) : (
        <ul className="mt-[20px]">
          {searchResults?.map((search, index) => (
            <li key={index} className="mb-[4px]">
              <SearchListItem
                search={search}
                selected={selected}
                setSelected={setSelected}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
