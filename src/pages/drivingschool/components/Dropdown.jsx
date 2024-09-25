import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "./icons";

// Dropdown Component
const Dropdown = ({
    title,
    options,
    placeholder = "Select an option",
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        value: "",
        label: `Select ${title}`,
    });
    const dropdownRef = useRef(null);
    const listItemStyles = "text-xs py-2 px-4 hover:bg-gray-100 cursor-pointer";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) onSelect(option); // Send selected option to parent
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between gap-4 text-xs font-medium text-[#2F394B] bg-transparent border border-[#DCDCE4] rounded-full shadow-sm py-2 px-4 w-full min-w-[187px] text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-custom-green"
            >
                <span className="bg-white px-2 py-1 rounded-full">{title}</span>
                <span className="text-nowrap">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <ul className="absolute left-0 z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                    <li
                        className={`${listItemStyles} opacity-50`}
                        onClick={() =>
                            handleSelect({
                                value: "",
                                label: `Select ${title}`,
                            })
                        }
                    >{`Select ${title}`}</li>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={listItemStyles}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
