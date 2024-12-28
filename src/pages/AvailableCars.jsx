import React, { useEffect, useState } from "react";
import AllCars from "./AllCars";

const AvailableCars = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCars")
      .then((res) => res.json())
      .then((data) => setAllCars(data))
      .catch((err) => {
        conosle.log("err", err);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-2 mb-3">All Cars</h1>
      <p className="text-gray-600 text-center">
        Explore our extensive collection of vehicles designed to meet <br />
        every need and lifestyle.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-3">
        {allCars.map((cars) => (
          <AllCars key={cars._id} cars={cars}></AllCars>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
