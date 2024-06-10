import { useState } from "react";
import { SearchType } from "../../types/SearchType";

import SearchForm3 from "../SearchForm/SearchForm3";
import Button from "../Button/Button"
import { useKeys } from "../../hooks/useKeys";
import SearchList from "../SearchList/SearchList";

export default function SideBar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    //const [selected, setSelected] = useState<SearchType | null>(null);

    useKeys(["Meta", "k"], () => setIsOpen(!isOpen));

    return (
        <div className="w-full">
            <SearchForm3
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
            <div
                id="bar"
                className="w-[320px] h-screen fixed pl-[15px] pr-[15px] pt-[40px] z-40 bg-locaDark border-r-[1.5px] border-locaMidAlt"
            >
                <Button isOpen={isOpen} setIsOpen={setIsOpen} />
                <SearchList />
            </div>
        </div>
     );
}
