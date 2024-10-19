import React from "react";

const SearchBar: React.FC = () => {
  return (
    <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <div
          className="text-neutral-500 flex border-none bg-[#EEEEEE] items-center justify-center pl-4 rounded-l-xl border-r-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
        <input
          placeholder="Search for a project"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border-none bg-[#EEEEEE] h-full placeholder:text-neutral-500 px-4"
        />
        <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#EEEEEE] pr-2">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold">
            <span className="truncate">Go</span>
          </button>
        </div>
      </div>
    </label>
  );
};

export default SearchBar;
