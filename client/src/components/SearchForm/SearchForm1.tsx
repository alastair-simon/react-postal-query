import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import enter from "../../assets/enter.svg";
import esc from "../../assets/esc.svg";
import { useKeys } from "../../hooks/useKeys";

type propsType = {
  country: string;
  setCountry: (country: string) => void;
  postcode: string;
  setPostcode: (postcode: string) => void;
  onSubmit: (e: any) => void;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  isError: boolean;
};

export default function SearchForm({
  country,
  setCountry,
  postcode,
  setPostcode,
  onSubmit,
  setIsOpen,
  isOpen,
  isError,
}: propsType) {

  useKeys(["Enter"], (e) => {
      onSubmit(e);
  });

  useKeys(["Escape"], () => {
    setIsOpen(false);
  });

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="w-full h-full fixed inset-0 bg-locaDark bg-opacity-90 animate-overlayShow" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-locaWhite rounded-lg shadow-custom-light w-[90vw] max-w-[450px] max-h-[85vh] p-6 animate-contentShow focus:outline-none"
          onInteractOutside={() => setIsOpen(false)}
        >
          <form className="Form" onSubmit={onSubmit}>
            <input
              placeholder="Search postcode"
              className="flex-1 inline-flex items-center justify-center rounded-md px-2.5 text-[15px] text-locaBlue border border-locaMidLight focus:outline-none focus:ring-2 focus:ring-locaBlue h-[35px]"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
            <select
              value={country}
              className="Select"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="US">United States</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <div className="Footer">
            <button className="FlexRow" onClick={() => setIsOpen(false)}>
              <img src={esc} className="Icon" />
              <p className="Text">to exit</p>
            </button>
            <div className="FlexRow">
              <img src={enter} className="Icon" />
              <p className="Text">to search</p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
