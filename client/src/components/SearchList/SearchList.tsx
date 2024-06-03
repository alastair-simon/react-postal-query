export default function SearchList({ searchList }) {

    return (
      <ul>
        {searchList.map((search, index) => (
          <li key={index} className="text-geoWhite">
            <p>{search.country}</p>
            <p>{search["post code"]}</p>
          </li>
        ))}
      </ul>
    );
}