import { SearchType } from "../../types/SearchType";
import { useNavigate } from "react-router-dom";

type propsType = {
  search:SearchType | null;
}

export default function SearchListItem({ search }: propsType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${search?.id}`);
  };

//is this search active
 // const activeClass = selected?.id === search?.id ? "bg-locaLight" : "";
  const activeClass = "bg-locaLight";

  return (
      <button
        className={`w-full h-[78px] pl-[10px] text-locaWhite ${activeClass} flex flex-row items-center gap-4 rounded-[8px]`}
        onClick={() => handleClick()}
      >
        <div className="w-[48px] h-[48px] bg-locaWhite rounded-[6px]"></div>
        <div className="text-[14px] font-medium flex flex-col justify-start text-left">
          <p>{search?.["post code"]}</p>
          <p className="text-locaMed">{search?.country}</p>
        </div>
      </button>
  );
}
