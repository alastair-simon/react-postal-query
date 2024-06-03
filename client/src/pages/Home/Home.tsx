import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Results from "../Results/Results";
import { useFetchPostalCodeData } from "../../hooks/useFetchPostalCode";
import SearchList from "../../components/SearchList/SearchList";

export default function Home() {

  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("US");
  const [searchOpen, setSearchOpen] = useState(false);
  const { isLoading, data, fetchData, searchList } = useFetchPostalCodeData();

  function handleSubmit(e) {
    e.preventDefault();
    fetchData(country, postcode);
    setPostcode("");
    setSearchOpen(!searchOpen);
  }

  return (
    <div className="w-full">
      {searchOpen && (
        <SearchForm
          postcode={postcode}
          setPostcode={setPostcode}
          country={country}
          setCountry={setCountry}
          onSubmit={handleSubmit}
        />
      )}
      <div id="sidebar" className="w-[300px] h-screen fixed bg-geoBlack border-r-[1px] border-geoWhite" >
        <button onClick={() => setSearchOpen(!searchOpen)} className="bg-geoGrey">search</button>
        <SearchList searchList={searchList} />
      </div>
      <div className="ml-[300px]">
        <Results data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}
