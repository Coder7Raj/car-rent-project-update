import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import MyCarsCard from "./MyCarsCard";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://car-rent-server-wine.vercel.app/myCars?email=${user.email}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
        })
        .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [user]);
  return (
    <div>
      <p className="text-2xl text-gray-800 font-bold text-center p-3">
        My Added Cars
      </p>
      <p className="text-gray-500 text-center mb-6">
        Keep track of your favorite cars in one place! Explore the list of
        vehicles <br /> you've added, manage your collection, and revisit your
        top choices anytime.
      </p>
      <div className="mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2 gap-3">
        {cars.length > 0 ? (
          cars.map((car) => (
            <MyCarsCard key={car._id} car={car} setCars={setCars} />
          ))
        ) : (
          <p className="text-center">No Cars Added</p>
        )}
      </div>
    </div>
  );
};

export default MyCars;
