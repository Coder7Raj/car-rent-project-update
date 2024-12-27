import React from "react";
import { Link } from "react-router-dom";

const AllCars = ({ cars }) => {
  const { _id, name, image, model, availability } = cars;
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">Model: {model}</p>
        <p className="text-gray-600">
          Availability: {availability ? "Available" : "Unavailable"}
        </p>
      </div>
      <div>
        <Link to={`/car_details/${_id}`}>
          <button className="btn btn-outline btn-primary">Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AllCars;
