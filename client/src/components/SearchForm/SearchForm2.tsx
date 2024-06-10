import enter from "../../assets/enter.svg";
import esc from "../../assets/esc.svg";
import { useState } from "react";
import { useKeys } from "../../hooks/useKeys";

type propsType = {
  country: string;
  setCountry: (country: string) => void;
  postcode: string;
  setPostcode: (postcode: string) => void;
  onSubmit: (e: any) => void;
  setSearchOpen: (value: boolean) => void;
  isError: boolean;
};

export default function SearchForm({
  country,
  setCountry,
  postcode,
  setPostcode,
  onSubmit,
  setSearchOpen,
  isError
}: propsType) {

  //No input
  const [inputMissing, setInputMissing] = useState<boolean>(false);

  //If enter pressed
  useKeys(["Enter"], (e) => {
    if (postcode) {
      onSubmit(e);
    } else {
      setInputMissing(true);
    }
  });

  //If Esc pressed
  useKeys(["Escape"], () => {
    setSearchOpen(false);
  });

  return (
    <div className="w-full h-screen fixed z-50 flex flex-col justify-center items-center bg-locaDark/75 backdrop-blur-sm">
      <div className="w-[460px] bg-locaLight rounded-[12px] overflow-hidden border-[1px] border-locaMidLight">
        <form className="p-[10px] flex flex-col gap-3" onSubmit={onSubmit}>
          <input
            placeholder="Search postcode"
            className="w-full h-[55px] pl-[20px] box-border rounded-[12px] text-locaMed bg-locaDark placeholder:text-locaMed placeholder-regular focus:outline-none focus:ring-1 focus:ring-locaBlue focus:border-locaBlue"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          ></input>
          {inputMissing && (
            <p className="w-full text-locaBlue text-center">
              Enter a postcode.
            </p>
          )}
          {isError && (
            <p className="w-full text-locaBlue text-center">
              Please enter a valid postcode.
            </p>
          )}
          <select
            value={country}
            className="h-[55px] pl-[10px] pr-[10px] mb-[20px] rounded-[12px] bg-locaDark text-locaMed focus:outline-none focus:ring-1 focus:ring-locaBlue focus:border-locaBlue"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="US">United States</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <div className="w-full h-[50px] pr-[10px] pl-[10px] bg-locaLight border-t-[1px] border-t-locaMidLight flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <button
              className="flex flex-row gap-2"
              onClick={() => setSearchOpen(false)}
            >
              <img src={esc} className="w-[25px]" />
              <p className="text-locaMed text-[14px]">to exit</p>
            </button>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={enter} className="w-[25px]" />
            <p className="text-locaMed text-[14px]">to search</p>
          </div>
        </div>
      </div>
    </div>
  );
}