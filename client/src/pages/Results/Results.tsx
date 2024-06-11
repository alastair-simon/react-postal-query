import { useContext } from "react";
import { useParams } from "react-router-dom";
//components
import { SearchContext } from "../../components/Context";
import { PlaceItem } from "../../components/PlaceItem/PlaceItem";
//types
import { SearchType, Place } from "../../types/SearchType";

export default function Results() {
  const { id } = useParams();
  const { searchResults } = useContext(SearchContext);
  //find search from list using params
  const selected = searchResults?.find((search: SearchType) => search.id === Number(id));
  return (
    <div className="ml-[300px]">
      <div
        id="wrapper"
        className="w-full h-screen pt-[100px] box-border flex flex-col items-center"
      >
          <div id="content">
              {selected?.places.map((place:Place, index:number) =>
                <PlaceItem key={index} place={place} postcode={selected["post code"]} />
              )}
          </div>
      </div>
    </div>
  );
}
