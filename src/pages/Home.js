import React from "react";

// import components
import HouseList from "../components/HouseList";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Search />
      <HouseList />
    </div>
  );
};

export default Home;
