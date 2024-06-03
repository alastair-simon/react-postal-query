import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();

  const [postcode, setPostcode] = useState(0);
  const [country, setCountry] = useState("US");

  function handleSubmit(e) {
    e.preventDefault();
    const url = `/results?country=${country}&postcode=${postcode}`;
    navigate(url);
  }

  return (
    <div>
      <form
        className="w-[510px] h-[280px] flex flex-col p-[10px]"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-[1.7rem] mb-[20px]">
          Enter your address
        </h2>
        <input
          placeholder="Enter postcode"
          className="w-full h-[55px] pl-[20px] border-[1px] border-geoLightGrey mb-[20px] rounded-[12px] placeholder:text-geoPink placeholder-regular"
          value={postcode}
          onChange={(e) => setPostcode(Number(e.target.value))}
        ></input>
        <select
          value={country}
          className="mb-[20px] border-[1px]"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="US">United States</option>
          <option value="DE">Germany</option>
        </select>
        <p className="text-geoPink text-[0.8rem] mb-[20px]">
          We'll use this info to find the location
        </p>
        <button
          type="submit"
          className="w-full h-[45px] bg-geoRed rounded-full text-geoWhite"
        >
          Find address
        </button>
      </form>
    </div>
  );
}
