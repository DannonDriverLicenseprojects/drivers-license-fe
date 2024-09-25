import { useState } from "react";
import Filter from "./components/Filter";
import SchoolCard from "./components/SchoolCard";
import SchoolInfo from "./components/SchoolInfo";
import { schoolsData } from "./constants";

const DrivingSchool = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedSchool, setSelectedSchool] = useState(null);

    const handleSchoolClick = (school) => {
        setSelectedSchool(school);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-14 px-10 md:px-20 py-10">
            <h1 className="text-3xl text-custom-green text-center font-semibold">Driving School</h1>
            <div className="space-y-8">
                <Filter searchText={searchText} setSearchText={setSearchText} />

                <div className="grid grid-cols-[739px_1fr] gap-5">
                    <div className="flex flex-col gap-4 border-4 border-[#F4F5F8] p-5 rounded-2xl">
                        {schoolsData.map((school, index) => (
                            <SchoolCard
                                key={index}
                                school={school}
                                selectedSchool={selectedSchool}
                                onClick={handleSchoolClick}
                            />
                        ))}
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
