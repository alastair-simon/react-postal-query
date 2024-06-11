import MyMapComponent from "../Map/Map";
import { Place } from "../../types/SearchType";

//prop type
type propsType = {
  place: Place;
  postcode: string;
}

export function PlaceItem({place, postcode}:propsType) {

    //extract longitude and latitude
    const longitude = place?.longitude || null;
    const latitude = place?.latitude || null;

    return (
      <div id="placeWrap" className="w-[850px] mb-[150px]">
        <h2 className="font-medium text-[32px] mb-[60px] text-locaWhite">
          {place["place name"]}, {postcode}
        </h2>
        <div className="w-full flex flex-col justify-between mb-[60px]">
          <div className="w-full flex flex-row border-b-[1px] border-b-locaMed">
            <div className="w-1/2 h-[80px] flex flex-col justify-center text-locaWhite text-[16px]">
              <p className="font-medium">State</p>
              <p className="text-locaMed">{place["state"]}</p>
            </div>
            <div className="w-1/2 h-[90px] flex flex-col justify-center text-locaWhite text-[16px]">
              <p className="font-medium">Longitude</p>
              <p className="text-locaMed">{place["longitude"]}</p>
            </div>
          </div>
          <div className="w-full flex flex-row border-b-[1px] border-b-locaMed">
            <div className="w-1/2 h-[90px] flex flex-col justify-center text-locaWhite text-[16px]">
              <p className="font-medium">Abbreviation</p>
              <p className="text-locaMed">
                {place["state abbreviation"]}
              </p>
            </div>
            <div className="w-1/2 h-[90px] flex flex-col justify-center text-locaWhite text-[16px]">
              <p className="font-medium">Latitude</p>
              <p className="text-locaMed">{place["latitude"]}</p>
            </div>
          </div>
        </div>
        <div className="relative ">
          <MyMapComponent latitude={latitude} longitude={longitude} />
        </div>
      </div>
    );
}