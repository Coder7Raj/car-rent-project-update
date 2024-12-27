import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import MyCarsCard from "./MyCarsCard";

const MyCars = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myCars?email=${user.email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
        })
        .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [user]);
  return (
    <div>
      <p className="text-2xl font-bold text-center mt-3 mb-6">My Added Cars</p>
      <div className="mb-3 mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-2 gap-3">
        {cars.length > 0 ? (
          cars.map((car) => (
            <MyCarsCard key={car._id} car={car} setCars={setCars} />
          ))
        ) : (
          <p>No Cars Added</p>
        )}
      </div>
    </div>
  );
};

export default MyCars;
