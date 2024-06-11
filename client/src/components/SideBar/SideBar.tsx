import { useState } from "react";
//hooks
import { useKeys } from "../../hooks/useKeys";
//components
import SearchForm from "../SearchForm/SearchForm";
import Button from "../Button/Button"
import SearchList from "../SearchList/SearchList";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useKeys(["Meta", "k"], () => setIsOpen(!isOpen));

    return (
        <div className="w-full">
            <SearchForm setIsOpen={setIsOpen} isOpen={isOpen} />
            <div
                id="bar"
                className="w-[320px] h-screen fixed pl-[15px] pr-[15px] pt-[40px] z-40 bg-locaDark border-r-[1.5px] border-locaMidAlt"
            >
                <Button isOpen={isOpen} setIsOpen={setIsOpen} />
                <SearchList/>
            </div>
        </div>
     );
}
