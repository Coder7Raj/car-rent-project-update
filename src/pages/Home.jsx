import React from "react";
import { Outlet } from "react-router-dom";
import SpecialOffers from "./SpecialOffers";
import RecentCars from "./RecentCars";
import ChooseFor from "./ChooseFor";

const Home = () => {
  return (
    <div>
      <Outlet></Outlet>
      <div>
        <SpecialOffers></SpecialOffers>
      </div>
      <div>
        <RecentCars></RecentCars>
      </div>
      <div>
        <ChooseFor></ChooseFor>
      </div>
    </div>
  );
};

export default Home;
