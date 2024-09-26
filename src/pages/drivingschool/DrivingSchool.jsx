import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import SchoolCard from "./components/SchoolCard";
import SchoolInfo from "./components/SchoolInfo";
import { schoolsData } from "./constants";

const DrivingSchool = () => {
    const [filteredSchools, setFilteredSchools] = useState(schoolsData);
    const [searchText, setSearchText] = useState("");
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [selectedState, setSelectedState] = useState("");
    const [selectedLga, setSelectedLga] = useState("");

    useEffect(() => {
        let filteredData = [...schoolsData];

        // Apply search text filter
        if (searchText) {
            filteredData = filteredData.filter(
                (school) =>
                    school.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.address
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.email
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    school.phone.includes(searchText)
            );
        }

        // Apply state filter
        if (selectedState) {
            filteredData = filteredData.filter((school) =>
                school.state.toLowerCase().includes(selectedState.toLowerCase())
            );
        }

        // Apply LGA filter
        if (selectedLga) {
            filteredData = filteredData.filter((school) =>
                school.lga.toLowerCase().includes(selectedLga.toLowerCase())
            );
        }

        setFilteredSchools(filteredData);
    }, [searchText, selectedState, selectedLga]);

    const handleSchoolClick = (school) => {
        setSelectedSchool(school);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-14 px-10 md:px-20 py-10">
            <h1 className="text-3xl text-custom-green text-center font-semibold">
                Driving School
            </h1>
            <div className="space-y-8">
                <Filter
                    setSearchText={setSearchText}
                    stateLgaObj={{
                        selectedState,
                        setSelectedState,
                        selectedLga,
                        setSelectedLga,
                    }}
                />

                <div className="grid grid-cols-[739px_1fr] gap-5">
                    <div className="flex flex-col gap-4 border-4 border-[#F4F5F8] p-5 rounded-2xl">
                        {filteredSchools.length !== 0 ? (
                            filteredSchools.map((school, index) => (
                                <SchoolCard
                                    key={index}
                                    school={school}
                                    selectedSchool={selectedSchool}
                                    onClick={handleSchoolClick}
                                />
                            ))
                        ) : (
                            <div className="min-h-40">
                                No driving school matches the search term
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 self-start border-4 border-[#F4F5F8] p-5 rounded-2xl">
                        {selectedSchool ? (
                            <SchoolInfo selectedSchool={selectedSchool} />
                        ) : (
                            <div className="min-h-40">No school selected</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrivingSchool;
