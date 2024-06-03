import SearchListItem from "../SearchListItem/SearchListItem";

export default function SearchList({ searchList, setSelected, selected }) {
    return (
      <div>
        <h2 className="text-locaMed mb-[24px]">Searches</h2>
        <ul>
          {searchList.map((search, index) => (
            <li
              key={index}
              className="mb-[4px]"
            >
              <SearchListItem
                search={search}
                setSelected={setSelected}
                selected={selected}
              />
            </li>
          ))}
        </ul>
      </div>
    );
}
