import React from 'react';

const FilterBar = () => {
    return (
        <div className="bg-[#F9F1E7] py-6 px-4 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-10v2m0 6v2m-6-10h2m10 0h2M6 12H4m16 0h-2m-2 6h2m-14 0h2m-2-6h2m10 0h2" />
                        </svg>
                        <span className="font-medium">Filter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                         </svg>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    </div>
                     <div className="hidden md:block border-l border-gray-400 h-6 mx-4"></div>
                    <p className="text-gray-600">Showing 1–16 of 32 results</p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="show" className="font-medium">Show</label>
                        <input type="text" id="show" defaultValue="16" className="w-12 p-2 text-center bg-white rounded-md shadow-sm" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="sort" className="font-medium">Short by</label>
                        <select id="sort" className="p-2 bg-white rounded-md shadow-sm appearance-none pr-8">
                            <option>Default</option>
                            <option>Price</option>
                            <option>Name</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;