import { useKeys } from "../../hooks/useKeys";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog, DialogPanel, Input, Select } from "@headlessui/react";
import { useFetchPostalCodeData } from "../../hooks/useFetchPostalCode";

type PropsType = {
  setSelected: (data: any) => void;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  setList: (data: any) => void;
};

// Validation schema
const schema = yup.object().shape({
  postcode: yup.string().required("Postcode is required"),
  country: yup.string().required("Country is required"),
});

export default function SearchForm3({setIsOpen,isOpen,setList}: PropsType) {
  const {fetchData, searchList} = useFetchPostalCodeData();
  const {register, handleSubmit, setValue, formState: { errors }} = useForm({resolver: yupResolver(schema)});

    const onFormSubmit = (data: any) => {
      fetchData(data.country, data.postcode);
      setList(searchList)
      setIsOpen(false)
    };

    // If enter pressed
    useKeys(["Enter"],() => {
        handleSubmit(onFormSubmit);
      }
    );

    // If Esc pressed
    useKeys(["Escape"],() => {
      setIsOpen(false);
      }
    );

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          id="cover"
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div>
                <Input
                  type="text"
                  className="border data-[hover]:shadow data-[focus]:bg-blue-100"
                  {...register("postcode")}
                />
                {errors.postcode && (
                  <p className="text-red-500">{errors.postcode.message}</p>
                )}
              </div>
              <div>
                <Select
                  className="border data-[hover]:shadow data-[focus]:bg-blue-100"
                  aria-label="Country"
                  {...register("country")}
                >
                  <option value="US">United States</option>
                  <option value="DE">Germany</option>
                </Select>
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}
              </div>
              <button type="submit" className="hidden" />
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
