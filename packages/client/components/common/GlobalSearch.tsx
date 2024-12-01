import { IconSearch, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const GlobalSearch: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };
  return (
    <div>
      <div
        onClick={handleSearchClick}
        className="hidden md:flex px-3 py-2 rounded-md bg-gray-500/20 text-sm items-center gap-4 cursor-text text-gray-500"
      >
        Search Component
        <IconSearch size={16} />
      </div>
      {isSearchActive && (
        <div className="absolute top-0 left-0 w-full h-full p-12 z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-opacity-90 backdrop-blur-sm"
            onClick={handleSearchClick}
          ></div>
          <div className="relative h-full p-6 z-50 bg-black/90 w-full max-w-[800px] mx-auto border border-white/20 rounded-lg">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full p-4 pl-10 pr-28 border-gray-300 bg-white/10 rounded-lg"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconSearch size={20} className="text-gray-500" />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md mr-2 pointer-events-none">
                  Ctrl + K
                </span>
                <div className="cursor-pointer" onClick={handleSearchClick}>
                  <IconX size={20} className="text-gray-500" />
                </div>
              </div>
            </div>
            <div className="mt-4">Search Results</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
