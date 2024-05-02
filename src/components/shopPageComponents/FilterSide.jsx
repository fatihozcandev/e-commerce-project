import React from "react";

const FilterSide = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-gray-300 max-w-[1050px] mx-auto my-8">
      <div className="text-center">
        <span className="text-h6  font-bold text-second-text-color">
          Showing all 12 results
        </span>
      </div>
      <div className="flex items-center ml-1">
        <span className="text-h6  font-bold text-second-text-color mr-1">
          Views:
        </span>
        {/* Icons container */}
        <div className="flex">
          <button className="mr-1">
            <img
              src="https://cdn-icons-png.freepik.com/512/58/58477.png"
              alt="Grid View"
              className="w-5 h-5"
            />
          </button>

          <button>
            <img
              src="https://static.thenounproject.com/png/1054393-200.png"
              alt="List View"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center ml-1">
        <div className="relative">
          <select className="outline-none border border-gray-300 rounded px-1 py-1 text-sm cursor-pointer">
            <option>Popularity</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>
        <button className="btn-blue">Filter</button>
      </div>
    </div>
  );
};

export default FilterSide;
