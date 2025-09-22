import React, { useState } from 'react';

const FilterBar = ({ filters, setFilters, sort, setSort }) => {
  const [showCount, setShowCount] = useState(filters.limit || 8);

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "Default") {
      setSort({ sortBy: "", sortOrder: "" });
    } else if (value === "Price") {
      setSort({ sortBy: "price", sortOrder: "asc" });
    } else if (value === "Name") {
      setSort({ sortBy: "brand", sortOrder: "asc" });
    }
  };

  const handleShowChange = (e) => {
    const value = parseInt(e.target.value);
    setShowCount(value);
    setFilters({ ...filters, limit: value });
  };

  return (
    <div className="bg-[#F9F1E7] py-6 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">
            Showing {filters.page ? (filters.page - 1) * showCount + 1 : 1}–{Math.min(filters.page ? filters.page * showCount : showCount, filters.total || 0)} of {filters.total || 0} results
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="font-medium">Show</label>
            <input
              type="number"
              className="w-16 p-2 text-center bg-white rounded-md shadow-sm"
              value={showCount}
              onChange={handleShowChange}
              min={1}
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium">Sort by</label>
            <select
              className="p-2 bg-white rounded-md shadow-sm appearance-none pr-8"
              value={sort.sortBy ? (sort.sortBy === "price" ? "Price" : "Name") : "Default"}
              onChange={handleSortChange}
            >
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
