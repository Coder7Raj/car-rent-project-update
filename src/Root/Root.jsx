import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header className="h-16">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-285px)] lg:max-w-[1024px] md:max-w-[768px] max-w-[425px] mx-auto">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
