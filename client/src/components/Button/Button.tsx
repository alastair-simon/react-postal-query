import ctrl from "../../assets/ctrl.svg";
import k from "../../assets/k.svg";
import search from "../../assets/search.svg";

type propsType = {
    searchOpen: boolean;
    setSearchOpen:(isOpen: boolean) => void;
}

export default function Button({ searchOpen, setSearchOpen }:propsType) {
  return (
    <button
      onClick={() => setSearchOpen(!searchOpen)}
      className="w-full h-[40px] mb-[55px] pl-[10px] pr-[10px] bg-locaLight hover:bg-locaMidLight border-[1px] border-locaMidLight rounded-[8px] flex flex-row items-center justify-between focus:outline-none"
    >
      <div className="flex flex-row gap-2">
        <img src={search}></img>
        <p className="text-locaMed">Search</p>
      </div>
      <div className="flex flex-row gap-2">
        <img src={ctrl} className="w-[25px]"></img>
        <img src={k} className="w-[25px]"></img>
      </div>
    </button>
  );
}
