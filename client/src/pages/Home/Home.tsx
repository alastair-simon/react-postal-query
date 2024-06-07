import { useEffect, useState, FormEvent } from "react";
import { useFetchPostalCodeData } from "../../hooks/useFetchPostalCode";
import { SearchType } from "../../types/SearchType";
//components
import SearchForm from "../../components/SearchForm/SearchForm";
import Results from "../Results/Results";
import SearchList from "../../components/SearchList/SearchList";
import Button from "../../components/Button/Button";
import { useKey } from "../../hooks/useKey";

export default function Home() {

  const [postcode, setPostcode] = useState<string>("");
  const [country, setCountry] = useState<string>("US");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SearchType | null>(null);
  const { isLoading, fetchData, searchList, isError, setIsError } = useFetchPostalCodeData();

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (country && postcode) {
      fetchData(country, postcode, setSelected);
      setPostcode("");
      setCountry("US")
      setSearchOpen(!searchOpen);
    }
  }
  
  //Key press hook
  useKey('meta', 'k', ()=>setSearchOpen(!searchOpen));

  return (
    <div className="w-full">

      {searchOpen && (
        <SearchForm
        postcode={postcode}
        setPostcode={setPostcode}
        country={country}
        setCountry={setCountry}
        onSubmit={handleSubmit}
        setSearchOpen={setSearchOpen}
        isError={isError}
        />
      )}
      <div
        id="sidebar"
        className="w-[320px] h-screen fixed pl-[15px] pr-[15px] pt-[40px] z-40 bg-locaDark border-r-[1.5px] border-locaMidAlt"
        >
        <Button searchOpen={searchOpen} setSearchOpen={setSearchOpen} setIsError={setIsError} />
        <SearchList
          searchList={searchList}
          setSelected={setSelected}
          selected={selected}
          />
      </div>
      <div className="ml-[300px]">
        <Results selected={selected} isLoading={isLoading} />
        {isError && (
          <div className="w-[340px] h-[50px] absolute m-auto bottom-[20px] left-[330px] right-0 bg-locaMed rounded-[10px]">
            <button className="w-full h-full" onClick={() => setIsError(false)}>
              <p>Error no results matched that postcode</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
