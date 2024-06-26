import { SearchType } from "../../types/SearchType";
import { useNavigate } from "react-router-dom";
import pin from "../../assets/pin.svg"

//props type
type propsType = {
  search: SearchType | null;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function SearchListItem({ search, selected, setSelected }: propsType) {
  const navigate = useNavigate();

  //check search active
  const activeClass = selected === search?.id ? "bg-locaLight" : "";

  //navigate to clicked
  const handleClick = () => {
    const curSearch = search?.id;
    navigate(`/${curSearch}`);
    setSelected(curSearch!)
  };

  return (
      <button
        className={`w-full h-[78px] pl-[10px] text-locaWhite ${activeClass} flex flex-row items-center gap-4 rounded-[8px]`}
        onClick={() => handleClick()}
      >
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-locaWhite rounded-[6px]">
          <img src={pin} className="w-[20px]"></img>
        </div>
        <div className="text-[14px] font-medium flex flex-col justify-start text-left">
          <p>{search?.["post code"]}</p>
          <p className="text-locaMed">{search?.country}</p>
        </div>
      </button>
  );
}
