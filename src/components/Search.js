import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import MoveInDate from "./MoveInDate";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <>
      <div className="flex my-4 gap-18 ">
        <h2 className=" text-4xl  ml-24 font-semibold leading-none mb-6 mx-6">
          Search properties to rent
        </h2>
        <select
          id="small"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 self-end ml-72"
        >
          <option selected>Select with Search </option>
          <option value="US">United States</option>
          <option value="Uk">Canada</option>
        </select>
      </div>
      <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
        <CountryDropdown />
        <MoveInDate />
        <PropertyDropdown />
        <PriceRangeDropdown />
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-14 rounded-lg flex justify-center items-center text-white text-lg"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
