import { Dispatch, SetStateAction, useContext } from "react";
import { useKeys } from "../../hooks/useKeys";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFetchPostalCodeData } from "../../hooks/useFetchPostalCode";
import { useNavigate } from "react-router-dom";

import { Dialog, DialogPanel, Input, Select } from "@headlessui/react";
import { SearchContext } from "../Context";
import esc from "../../assets/esc.svg";

type PropsType = {
  //setSelected: Dispatch<SetStateAction<SearchType | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

// Validation schema
const schema = yup.object().shape({
  postcode: yup
    .string()
    .required("Postcode is required")
    .matches(/^\d{5}$/, "Postcode must be exactly 5 numeric characters"),
  country: yup.string().required("Country is required"),
});

export default function SearchForm3({ setIsOpen, isOpen }: PropsType) {

  const { setSearchResults } = useContext(SearchContext);
  const {register, handleSubmit, setValue, reset, formState: { errors }} = useForm({ resolver: yupResolver(schema) });
  const { isLoading, fetchData, isError } = useFetchPostalCodeData();
  const navigate = useNavigate();

  async function onFormSubmit(data:any) {
    const dataNew = await fetchData(data.country, data.postcode);
    if (dataNew) {
      setSearchResults((prevSearchList) => [...prevSearchList, dataNew]);
      navigate(`/${dataNew.id}`);
      setIsOpen(!isOpen)
      reset();
    }
  };

  //If enter pressed
  useKeys(["Meta", "e"], () => {
    handleSubmit(onFormSubmit)();
  });

  // If Esc pressed
  useKeys(["Escape"], () => {
    setIsOpen(false);
    reset();
  });

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          id="cover"
          className="fixed inset-0 bg-locaDark/75 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="w-[460px] bg-locaLight rounded-[12px] overflow-hidden border-[1px] border-locaMidLight">
            <form
              onSubmit={handleSubmit(onFormSubmit)}
              className="p-[10px] flex flex-col gap-3"
            >
              <div>
                <Input
                  type="text"
                  placeholder="Enter postcode"
                  className="w-full h-[55px] pl-[20px] box-border rounded-[12px] text-locaMed bg-locaDark placeholder:text-locaMed placeholder-regular data-[hover]:shadow data-[focus]:bg-locaDark data-[focus]:outline-none data-[focus]:ring-1 data-[focus]:ring-locaBlue data-[focus]:border-locaBlue"
                  {...register("postcode")}
                />
                {errors.postcode && (
                  <p className="w-full mt-[5px] text-locaBlue text-center text-[15px] font-regular">
                    {errors.postcode.message}
                  </p>
                )}
              </div>
              <div>
                <Select
                  className="data-[hover]:shadow data-[focus]:bg-blue-100 w-full h-[55px] pl-[10px] pr-[10px] mb-[20px] rounded-[12px] bg-locaDark text-locaMed focus:outline-none focus:ring-1 focus:ring-locaBlue focus:border-locaBlue"
                  aria-label="Country"
                  {...register("country")}
                >
                  <option value="US">United States</option>
                  <option value="DE">Germany</option>
                </Select>
                {errors.country && (
                  <p className="w-full text-locaBlue text-center">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="w-full h-[50px] pr-[10px] pl-[10px] bg-locaLight border-t-[1px] border-t-locaMidLight flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <button className="flex flex-row gap-2">
                    <img src={esc} className="w-[25px]" />
                    <p className="text-locaMed text-[14px]">to exit</p>
                  </button>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p>cmd + e</p>
                  <p className="text-locaMed text-[14px]">to search</p>
                </div>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
