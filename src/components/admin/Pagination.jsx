import React from "react";
import { generateMultiplesOf10 } from "./utils/pagination";
import ChevronNext from "./icons/ChevronNext";
import ChevronPrevious from "./icons/ChevronPrevious";

const Pagination = ({ table, tableData }) => {
    return (
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 pb-6">
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <span className="font-medium text-sm text-gray-700 dark:text-gray-100">
                    {`Page ${
                        table.getState().pagination.pageIndex + 1
                    } of ${table.getPageCount()}`}
                </span>

                <span className="flex items-center gap-1 text-sm">
                    Go to page:
                    <input
                        type="number"
                        min="1"
                        max={table.getPageCount()}
                        className="border border-primary text-sm p-1 rounded-sm w-10 bg-transparent text-center outline-none"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            table.setPageIndex(page);
                        }}
                    />
                </span>

                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                    className="p-2 text-sm bg-transparent outline-none"
                >
                    {generateMultiplesOf10(tableData.length).map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center">
                <button
                    onClick={() => {
                        table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                    className="flex items-center justify-center px-5 py-2 text-custom-green capitalize gap-x-3 disabled:opacity-30"
                >
                    <ChevronPrevious />
                    <span className="text-sm font-medium">previous</span>
                </button>

                <div className="flex items-center">
                    {[...Array(table.getPageCount())].map(
                        (pageNumber, index) => {
                            const currentPage =
                                table.getState().pagination.pageIndex + 1;

                            return (
                                <button
                                    className={`flex justify-center items-center text-sm px-3 py-1 rounded-md font-semibold ${
                                        currentPage === index + 1
                                            ? "bg-custom-green text-white"
                                            : "text-custom-green bg-transparent"
                                    }`}
                                    key={index}
                                    onClick={() =>
                                        table.setPageIndex(Number(index))
                                    }
                                >
                                    {index + 1}
                                </button>
                            );
                        }
                    )}
                </div>

                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className="flex items-center justify-center px-5 py-2 text-custom-green capitalize gap-x-3 disabled:opacity-30"
                >
                    <span className="text-sm font-medium">Next</span>
                    <ChevronNext />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
