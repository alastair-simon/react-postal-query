import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

export default function Nav() {
  return (
    <div className="w-full h-[65px] pl-[40px] pr-[40px] fixed flex justify-between items-center z-999 border-b-[1px] border-geoAltGrey bg-geoWhite">
      <Link to={"/"}>
        <img src={logo} className="w-[100px] text-geoRed" />
      </Link>
      <button className="pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-geoGrey rounded-full">
        Dark mode
      </button>
    </div>
  );
}
