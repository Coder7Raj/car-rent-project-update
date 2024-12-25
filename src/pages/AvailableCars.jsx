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
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {allCars.map((cars) => (
        <AllCars key={cars._id} cars={cars}></AllCars>
      ))}
    </div>
  );
};

export default AvailableCars;
