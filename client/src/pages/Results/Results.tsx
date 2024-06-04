import MyMapComponent from "../../components/Map/Map";
import { SearchType } from "../../types/SearchType";
import spin from "../../assets/spin.svg";

type propsType = {
  isLoading: boolean;
  selected: SearchType | null;
};

export default function Results({ isLoading, selected }: propsType) {
  //extract longitude and latitude
  const longitude = selected?.places[0].longitude || null;
  const latitude = selected?.places[0].latitude || null;

  //check if one has been selected
  if (!selected) {
    return (
      <div
        id="placeholder-wrap"
        className="w-full h-screen pl-[50px] flex flex-row justify-center items-center text-locaWhite"
      >
        <div className="w-[240px] h-[120px] flex flex-row justify-center items-center gap-2 rounded-[20px] border-[1px] border-locaMidLight">
          <p className="text-[18px] text-center font-regular text-locaMidLight">
            K + ⌘ to start <br></br> a new search
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="wrapper"
      className="w-full h-screen pt-[100px] box-border flex flex-col items-center"
    >
      {isLoading ? (
        <div className="w-[850px] h-screen flex flex-col justify-center items-center text-locaWhite">
          <img src={spin} />
        </div>
      ) : (
        <div id="content" className="w-[850px]">
          <h2 className="font-medium text-[32px] mb-[60px] text-locaWhite">
            {selected?.places[0]["place name"]}, {selected["post code"]}
          </h2>
          <div className="w-full flex flex-col justify-between mb-[60px]">
            <div className="w-full flex flex-row border-b-[1px] border-b-locaMed">
              <div className="w-1/2 h-[80px] flex flex-col justify-center text-locaWhite text-[16px]">
                <p className="font-medium">State</p>
                <p className="text-locaMed">{selected?.places[0]["state"]}</p>
              </div>
              <div className="w-1/2 h-[90px] flex flex-col justify-center text-locaWhite text-[16px]">
                <p className="font-medium">Longitude</p>
                <p className="text-locaMed">
                  {selected?.places[0]["longitude"]}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row border-b-[1px] border-b-locaMed">
              <div className="w-1/2 h-[90px] flex flex-col justify-center text-locaWhite text-[16px]">
                <p className="font-medium">Abbreviation</p>
                <p className="text-locaMed">
                  {selected?.places[0]["state abbreviation"]}
                </p>
              </div>
              <div className="w-1/2 h-[90px] flex flex-col justify-center text-locaWhite text-[16px]">
                <p className="font-medium">Latitude</p>
                <p className="text-locaMed">
                  {selected?.places[0]["latitude"]}
                </p>
              </div>
            </div>
          </div>
          <div className="relative ">
            <MyMapComponent latitude={latitude} longitude={longitude} />
          </div>
        </div>
      )}
    </div>
  );
}
