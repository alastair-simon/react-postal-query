import { useEffect, useState } from "react";
import MyMapComponent from "../../components/Map/Map";
import { useLocation } from "react-router-dom";
import { fetchPostalCodeData } from "../../services/apiService";

export default function Results() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const params = new URLSearchParams(useLocation().search);
  const postcode = params.get("postcode");
  const country = params.get("country");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchPostalCodeData(country, postcode);
        setData(res);
        setIsLoading(false);
      } catch (error) {
        setData(null);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Data not available.</div>;
  }

  const long = data.places[0]["longitude"];
  const lat = data.places[0]["latitude"];

  return (
    <div id="wrapper" className="w-full h-screen flex flex-row">
      <div
        id="data"
        className="w-[480px] h-screen pt-[60px] pl-[40px] pr-[40px]"
      >
        <div></div>
        <div id="top-text">
          <h2 className="font-semibold text-[28px] mb-[2px]">
            {data?.places[0]["place name"]}, {data["post code"]}
          </h2>
          <p className="mb-[50px] text-[0.9rem] text-geoPink font-bold">
            {data?.country}
          </p>
        </div>

        <ul className="list">
          {Object.entries(data?.places[0]).map(([key, val], index) => (
            <li
              key={index}
              className="w-full h-[80px] flex flex-col justify-center border-geoAltGrey border-b-[1px]"
            >
              <p className="text-geoPalePink text-[14px] font-medium ">{key}</p>
              <p className="text-[14px] text-geoBlack">{val}</p>
            </li>
          ))}
        </ul>
      </div>
      <div id="map" className="h-screen bg-geoLightGrey grow">
        <MyMapComponent lat={lat} long={long} />
      </div>
    </div>
  );
}
