import React, { useEffect, useState } from "react";
import Cars from "./Cars";

const RecentCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div>
      <div className="text-center mb-6 mt-10">
        <h1 className="text-3xl text-gray-800 font-semibold mb-2">
          Recently Added Cars
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum <br />
          corporis maxime quisquam. Sint aperiam sequi ipsa necessitatibus quos!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 bg-gray-100 p-3">
        {cars?.slice(0, 6).map((car) => (
          <Cars key={car._id} car={car}></Cars>
        ))}
      </div>
    </div>
  );
};

export default RecentCars;
