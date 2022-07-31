import React from "react";
import { BiBed, BiBath, BiArea, BiHeartCircle } from "react-icons/bi";

const House = ({ house }) => {
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={house.image} alt="" />
      <div className=" flex justtify-evenly text-[30px]">
        <div className=" flex text-lg font-semibold text-violet-600 mb-4 px-6">
          $ {house.price}
          <p className="text-gray-400 flex">/month</p>
        </div>
        <BiHeartCircle className="text-gray-300 mx-10 " />
      </div>
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3 inline-block">
          {house.type}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
          {house.country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{house.address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiBed />
          </div>
          <div className="text-sm">{house.bedrooms} Beds</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiBath />
          </div>
          <div className="text-sm">{house.bathrooms} Bathrooms</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] rounded-full">
            <BiArea />
          </div>
          <div className="text-sm">{house.surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
