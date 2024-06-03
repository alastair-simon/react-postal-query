import { useEffect, useState } from "react";
import MyMapComponent from "../../components/Map/Map";

export default function Results({isLoading, data}) {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Data not available.</div>;
  }

  const long = 13.4;
  const lat = 52.5167;
  // const long = data.places[0]["longitude"];
  // const lat = data.places[0]["latitude"];

  return (
    <div
      id="wrapper"
      className="max-w-[100%] pt-[100px] pl-[150px] pr-[150px] box-border flex flex-col  "
    >
      <h2 className="font-semibold text-[28px] mb-[2px] text-geoWhite">
        {data?.places[0]["place name"]}, {data["post code"]}
      </h2>
      <p className="mb-[50px] text-[0.9rem] text-geoWhite font-bold">
        {data?.country}
      </p>

      <ul className="mb-[90px]">
        {Object.entries(data?.places[0]).map(([key, val], index) => (
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
  );
}
