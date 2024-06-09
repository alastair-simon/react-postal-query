import { useEffect, useState, FormEvent } from "react";
import { SearchType } from "../../types/SearchType";

//components
import SearchForm from "../../components/SearchForm/SearchForm1";
import SearchForm3 from "../../components/SearchForm/SearchForm3";
import Results from "../Results/Results";
import SearchList from "../../components/SearchList/SearchList";
import Button from "../../components/Button/Button";
import { useKeys } from "../../hooks/useKeys";


export default function Home({setList, list, selected, setSelected}) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [selected, setSelected] = useState<SearchType | null>(null);
  // const [list, setList] = useState<SearchType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useKeys(["Meta", "k"], ()=>setIsOpen(!isOpen));

  return (
    <div className="w-full">
      <SearchForm3
        setList={setList}
        setIsOpen={setIsOpen}
        setSelected={setSelected}
        isOpen={isOpen}
      />
      <div
        id="sidebar"
        className="w-[320px] h-screen fixed pl-[15px] pr-[15px] pt-[40px] z-40 bg-locaDark border-r-[1.5px] border-locaMidAlt"
      >
        <Button isOpen={isOpen} setIsOpen={setIsOpen} />
        <SearchList list={list} setSelected={setSelected} selected={selected} />
      </div>
      {/* <Results selected={selected} isLoading={isLoading} /> */}
      {/* <div className="ml-[300px]"></div> */}
    </div>
  );
}
