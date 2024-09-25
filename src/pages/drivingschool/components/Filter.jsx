import React from "react";
import Dropdown from "./Dropdown";
import { Lens } from "./icons";

const Filter = ({ searchText, setSearchText }) => {
    const options = [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
    ];

    const handleSelect = (option) => {
        console.log("Selected option:", option);
    };

    return (
        <div className="flex items-center justify-between gap-4 md:gap-6 w-full bg-[#F2F2F2] px-6 md:px-16 py-5 rounded-2xl">
            <div className="w-full min-w-[200px] max-w-[375px] bg-white border pl-4 pr-12 py-3 border-custom-green rounded-full relative">
                <input
                    type="text"
                    name="searchText"
                    className="w-full text-sm text-[#9E9E9E] font-medium outline-none bg-transparent"
                    value={searchText}
                    onChange={() => setSearchText()}
                    placeholder="Search Driving School..."
                />

                <Lens className="absolute right-4 inset-y-3" />
            </div>
            <div className="flex items-center gap-5">
                <Dropdown
                    title="State"
                    options={options}
                    placeholder="Select an option"
                    onSelect={handleSelect}
                />
                <Dropdown
                    title="LGA"
                    options={options}
                    placeholder="Select an option"
                    onSelect={handleSelect}
                />
                <button className="px-6 py-2 bg-custom-green hover:bg-green-800 text-sm font-medium text-white rounded-full">Search</button>
            </div>
        </div>
    );
};

export default Filter;
