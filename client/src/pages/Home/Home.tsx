import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Results from "../Results/Results";
import { useFetchPostalCodeData } from "../../hooks/useFetchPostalCode";
import SearchList from "../../components/SearchList/SearchList";
import ctrl from "../../assets/ctrl.svg"
import k from "../../assets/k.svg"
import search from "../../assets/search.svg"

export default function Home() {

  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("US");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { isLoading, fetchData, searchList } = useFetchPostalCodeData();

  useEffect(() => {
    console.log(searchList)
  },[searchList])

  function handleSubmit(e) {
    e.preventDefault();
    if (country && postcode) {
      fetchData(country, postcode, setSelected);
      setPostcode("");
      setCountry("US")
      setSearchOpen(!searchOpen);
    }
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
      <div
        id="sidebar"
        className="w-[320px] h-screen fixed pl-[15px] pr-[15px] pt-[40px] bg-locaDark border-r-[1.5px] border-locaMidAlt"
      >
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="w-full h-[40px] mb-[55px] pl-[10px] pr-[10px] bg-locaLight border-[1px] border-locaMidLight rounded-[8px] flex flex-row items-center justify-between"
        >
          <div className="flex flex-row gap-2">
            <img src={search}></img>
            <p className="text-locaMed">Search</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={k} className="w-[25px]"></img>
            <img src={ctrl} className="w-[25px]"></img>
          </div>
        </button>
        <SearchList searchList={searchList} setSelected={setSelected} selected={selected} />
      </div>
      <div className="ml-[300px]">
        <Results selected={selected} isLoading={isLoading} />
      </div>
    </div>
  );
}
