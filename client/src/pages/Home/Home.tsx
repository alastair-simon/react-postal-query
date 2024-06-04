import { useEffect, useState, FormEvent } from "react";
import { useFetchPostalCodeData } from "../../hooks/useFetchPostalCode";
import { SearchType } from "../../types/SearchType";
//components
import SearchForm from "../../components/SearchForm/SearchForm";
import Results from "../Results/Results";
import SearchList from "../../components/SearchList/SearchList";
import Button from "../../components/Button/Button";

export default function Home() {

  const [postcode, setPostcode] = useState<string>("");
  const [country, setCountry] = useState<string>("US");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SearchType | null>(null);
  const { isLoading, fetchData, searchList } = useFetchPostalCodeData();

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (country && postcode) {
      fetchData(country, postcode, setSelected);
      setPostcode("");
      setCountry("US")
      setSearchOpen(!searchOpen);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        setSearchOpen(!searchOpen);
      }
    };
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

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
        />
      )}
      <div
        id="sidebar"
        className="w-[320px] h-screen fixed pl-[15px] pr-[15px] pt-[40px] z-40 bg-locaDark border-r-[1.5px] border-locaMidAlt"
      >
        <Button searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
        <SearchList
          searchList={searchList}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div className="ml-[300px]">
        <Results selected={selected} isLoading={isLoading} />
      </div>
    </div>
  );
}
