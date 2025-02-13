import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCarsCard = ({ car, setCars }) => {
  const {
    description,
    features,
    availability,
    pricePerDay,
    model,
    image,
    name,
    _id,
  } = car;

  const handleDeleteAddedCar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-rent-server-wine.vercel.app/allCars/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setCars((prev) => prev.filter((r) => r._id !== id));
            }
          })
          .catch((err) => console.error("Error deleting review:", err));
      }
    });
  };
  return (
    <div className="flex flex-col h-full overflow-hidden shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-[180px] object-cover rounded-t-lg"
          src={image}
          alt={name}
        />
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {availability ? "Available" : "Unavailable"}
        </div>
      </div>
      <div className="flex-1 p-4 space-y-3">
        <h1 className="text-lg font-semibold text-gray-800">Name: {name}</h1>
        <p className="text-sm text-gray-700">
          Model: <span className="font-medium">{model}</span>
        </p>
        <p className="text-sm text-gray-700">
          Price Per Day:{" "}
          <span className="font-bold text-green-600">${pricePerDay}</span>
        </p>
        <div>
          <h2 className="text-sm font-medium text-gray-800">Top Features:</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-gray-600">Description: {description}</p>
      </div>
      <div className="p-4 flex flex-col justify-between gap-4 mt-auto">
        <Link to={`/update_my_car/${_id}`}>
          <button className="btn btn-outline btn-primary hover:bg-blue-500 hover:text-white transition-all w-full">
            Update
          </button>
        </Link>
        <button
          className="btn btn-outline btn-danger hover:bg-red-500 hover:text-white transition-all w-full"
          onClick={() => handleDeleteAddedCar(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyCarsCard;
