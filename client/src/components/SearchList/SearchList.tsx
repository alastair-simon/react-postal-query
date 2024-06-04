import SearchListItem from "../SearchListItem/SearchListItem";
import { Dispatch, SetStateAction } from "react";
import { SearchType } from "../../types/SearchType";

type propsType = {
  searchList: SearchType[];
  setSelected: Dispatch<SetStateAction<SearchType | null>>;
  selected: SearchType | null;
};

export default function SearchList({ searchList, setSelected, selected }: propsType) {
    return (
      <div>
        <h2 className="text-locaMed mb-[4px]">Searches</h2>
        {searchList.length === 0 ? (
          <p className="text-locaMidLight text-[16px]">No searches yet</p>
        ) : (
          <ul className="mt-[20px]">
            {searchList?.map((search, index) => (
              <li key={index} className="mb-[4px]">
                <SearchListItem
                  search={search}
                  setSelected={setSelected}
                  selected={selected}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
