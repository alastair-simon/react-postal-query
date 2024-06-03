import { useEffect, useState } from "react";
import MyMapComponent from "../../components/Map/Map";

export default function Results({isLoading, selected}) {

  if (!selected) {
    return <div className="text-locaWhite">Data not available.</div>;
  }

  const long = selected.places[0]["longitude"];
  const lat = selected.places[0]["latitude"];

  return (
    <div
      id="wrapper"
      className="max-w-[100%] pt-[100px] pl-[150px] pr-[150px] box-border flex flex-col  "
    >
      {isLoading ? (
        <p className="text-locaWhite">Loading</p>
      ): (
      <div id="content">
        <h2 className="font-semibold text-[28px] mb-[2px] text-geoWhite">
          {selected?.places[0]["place name"]}, {selected["post code"]}
        </h2>
        <p className="mb-[50px] text-[0.9rem] text-geoWhite font-bold">
          {selected?.country}
        </p>

        <ul className="mb-[90px]">
          {Object.entries(selected?.places[0]).map(([key, val], index) => (
            <li
              key={index}
              className="w-full h-[80px] flex flex-col justify-center border-geoAltGrey border-b-[1px]"
            >
              <p className="text-geoWhite text-[14px] font-medium ">{key}</p>
              <p className="text-[14px] text-geoWhite">{val}</p>
            </li>
          ))}
        </ul>
        <div className="relative ">
          <MyMapComponent lat={lat} long={long} />
        </div>
      </div>
    )}

    </div>
  );
}
