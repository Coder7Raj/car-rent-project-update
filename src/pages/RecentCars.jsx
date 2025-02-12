import React, { useEffect, useState } from "react";
import Cars from "./Cars";

const RecentCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://car-rent-server-wine.vercel.app/allCars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div>
      <div className="text-center mb-6 mt-16">
        <h1 className="text-3xl text-gray-100 font-semibold mb-2">
          Recently Added Cars
        </h1>
        <p className="text-gray-300">
          Explore our collection of recently added cars, featuring the latest
          models and innovations in <br /> style, comfort, and performance.
          Don't miss the chance to drive your dream car today!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 p-3">
        {cars?.slice(0, 6).map((car) => (
          <Cars key={car._id} car={car}></Cars>
        ))}
      </div>
    </div>
  );
};

export default RecentCars;
