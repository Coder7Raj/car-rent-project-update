import React from "react";
import { Outlet } from "react-router-dom";
import SpecialOffers from "./SpecialOffers";
import RecentCars from "./RecentCars";
import ChooseFor from "./ChooseFor";
import Testimonials from "./Testimonials";

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
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
