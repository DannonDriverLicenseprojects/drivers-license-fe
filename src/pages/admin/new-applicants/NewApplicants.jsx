import React from "react";
import Table from "../../../components/admin/Table";

import { newApplicantsColumns, newApplicantsData } from "./data";

const NewApplicants = () => {
    return <Table tableData={newApplicantsData} cols={newApplicantsColumns} title="New Applicants" />;
};

export default NewApplicants;
