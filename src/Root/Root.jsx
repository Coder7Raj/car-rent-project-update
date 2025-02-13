import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <div className="lg:max-w-[1600px] md:max-w-[768px] max-w-[425px] mx-auto">
        <header>
          <Navbar />
        </header>
      </div>
      <div className="lg:max-w-[1200px] md:max-w-[768px] max-w-[425px] mx-auto overflow-y-auto pt-16">
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Root;
