import React from "react";
import { Link } from "react-router-dom";

const AllCars = ({ cars }) => {
  const { _id, name, image, model, availability } = cars;
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-1">
          Model: <span className="font-medium">{model}</span>
        </p>
        <p className="text-sm">
          Availability:{" "}
          <span
            className={`font-semibold ${
              availability ? "text-green-600" : "text-red-600"
            }`}
          >
            {availability ? "Available" : "Unavailable"}
          </span>
        </p>
      </div>
      <div className="px-6 pb-4">
        <Link to={`/car_details/${_id}`}>
          <button className="btn btn-outline btn-primary w-full py-2 text-sm font-semibold hover:bg-primary hover:text-white transition-all">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllCars;
