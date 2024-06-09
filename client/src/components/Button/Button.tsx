import ctrl from "../../assets/ctrl.svg";
import k from "../../assets/k.svg";
import search from "../../assets/search.svg";

type propsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Button({ isOpen, setIsOpen }:propsType) {
  return (
    <button
      onClick={() => { setIsOpen(!isOpen)}}
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
