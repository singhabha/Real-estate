import React from "react";

export default function MoveInDate() {
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="datepicker relative form-floating mb-3 xl:w-48">
          <label for="floatingInput" class="text-gray-700">
            When
          </label>
          <input
            type="date"
            class="form-control block w-full px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select Move-in date"
          />
        </div>
      </div>
    </>
  );
}
