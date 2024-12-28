import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const CarDetails = () => {
  const carDetails = useLoaderData();
  const {
    description,
    features,
    availability,
    pricePerDay,
    model,
    image,
    name,
    _id,
  } = carDetails;
  const { user } = useContext(AuthContext);

  const carBookList = {
    image,
    name,
    id: _id,
    model,
    userEmail: user?.email,
  };

  const handleCarBooking = () => {
    fetch(`http://localhost:5000/bookList/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carBookList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          Swal.fire("This review already in bookList");
        }
        if (data.insertedId) {
          Swal.fire("Successfully added to GameBookList");
        }
      })
      .catch((error) => console.error("Error adding to bookList:", error));
    //
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 py-10 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Car Details</h1>
        <p className="text-sm text-gray-500">
          Explore the features and specifications of your selected car
        </p>
      </div>
      <div className="mb-2 flex self-start lg:w-2/3 md:w-2/3 w-full m-auto">
        <Link to={"/available_cars"}>
          <button className="btn btn-outline btn-primary">
            <FaArrowLeft />
          </button>
        </Link>
      </div>
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
        <div>
          <img className="w-full h-64 object-cover" src={image} alt={name} />
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Name: {name}</h2>
          <p className="text-lg text-gray-700">Model: {model}</p>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Features:</h3>
            <ol
              type="number"
              className="list-decimal list-inside text-gray-700"
            >
              {features?.map((feature, index) => (
                <li key={index}>
                  {typeof feature === "object" ? feature?.name : feature}
                </li>
              ))}
            </ol>
          </div>
          <p className="text-gray-700">
            <span className="font-medium">Availability:</span>
            {availability ? "Available" : "Unavailable"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Price Per Day:</span> ${pricePerDay}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Description:</span> {description}
          </p>
        </div>
        <div className="w-full p-4 bg-gray-100 border-t">
          <Link>
            <button
              onClick={handleCarBooking}
              className="w-full btn btn-outline btn-primary"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
