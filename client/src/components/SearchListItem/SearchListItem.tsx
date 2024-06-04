import { SearchType } from "../../types/SearchType";

type propsType = {
  setSelected: (selected: SearchType | null) => void;
  selected: SearchType | null;
  search:SearchType | null;
}

export default function SearchListItem({ setSelected, search, selected }: propsType) {

  //is this search active
  const activeClass = selected?.id === search?.id ? "bg-locaLight" : "";

  return (
    <button
      className={`w-full h-[78px] pl-[10px] text-locaWhite ${activeClass} flex flex-row items-center gap-4 rounded-[8px]`}
      onClick={() => setSelected(search)}
    >
      <div className="w-[48px] h-[48px] bg-locaWhite rounded-[6px]"></div>
      <div className="text-[14px] font-medium flex flex-col justify-start text-left">
        <p>{search?.["post code"]}</p>
        <p className="text-locaMed">{search?.country}</p>
      </div>
    </button>
  );
}
