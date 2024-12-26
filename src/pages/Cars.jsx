import React from "react";
import "animate.css";

const Cars = ({ car }) => {
  const { name, image, model, availability } = car;
  return (
    <div className="animate__animated animate__fadeInUpBig">
      <div className="border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
        <img src={image} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">Model: {model}</p>
          <p className="text-gray-600">
            Availability: {availability ? "Available" : "Unavailable"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cars;
