import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="lg:max-w-[1024px] md:max-w-[768px] max-w-[425px] mx-auto overflow-y-auto">
      <header className="h-16">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-285px)] bg-gray-200">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
