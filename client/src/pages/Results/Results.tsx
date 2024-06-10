import { useContext } from "react";
import { useParams } from "react-router-dom";
//components
import { SearchContext } from "../../components/Context";
import { PlaceItem } from "../../components/PlaceItem/PlaceItem";
import spin from "../../assets/spin.svg";
//types 
import { SearchType, Place } from "../../types/SearchType";

export default function Results() {
  const isLoading = false;
  const { id } = useParams();
  const {searchResults} = useContext(SearchContext);
  const selected = searchResults?.find((search: SearchType) => search.id === Number(id));

  return (
    <div className="ml-[300px]">
      <div
        id="wrapper"
        className="w-full h-screen pt-[100px] box-border flex flex-col items-center"
      >
        {isLoading ? (
          <div className="w-[850px] h-screen flex flex-col justify-center items-center text-locaWhite">
            <img src={spin} />
          </div>
        ) : (
            <div id="content">
              {selected?.places.map((place:Place, index:number) =>
                <PlaceItem key={index} place={place} postcode={selected["post code"]} />
              )}
          </div>
        )}
      </div>
    </div>
  );
}
