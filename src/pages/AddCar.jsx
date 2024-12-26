import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = useContext(AuthContext);

  const handleAddCars = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const model = e.target.model.value;
    const pricePerDay = e.target.pricePerDay.value;
    const availability = e.target.availability.value === "true";
    const features = [
      e.target.feature1.value,
      e.target.feature2.value,
      e.target.feature3.value,
    ];
    const description = e.target.description.value;
    const email = user?.email;

    const carData = {
      name,
      image,
      model,
      pricePerDay,
      availability,
      features,
      description,
      email,
    };

    fetch("http://localhost:5000/allCars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add car");
        }
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Car added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };

  return (
    <div className="mt-4 mb-4">
      <form
        onSubmit={handleAddCars}
        className="p-6 space-y-4 bg-white shadow-lg rounded-md"
      >
        <h2 className="text-2xl font-bold text-center">Add a New Car</h2>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="name">
            Car Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter car name"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="image">
            Car Image URL
          </label>
          <input
            type="url"
            name="image"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter car image URL"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="model">
            Model
          </label>
          <input
            type="text"
            name="model"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter car model"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="pricePerDay">
            Price Per Day
          </label>
          <input
            type="number"
            name="pricePerDay"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter price per day"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="availability">
            Availability
          </label>
          <select
            name="availability"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Features</label>
          <input
            type="text"
            name="feature1"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Feature 1"
            required
          />
          <input
            type="text"
            name="feature2"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Feature 2"
            required
          />
          <input
            type="text"
            name="feature3"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Feature 3"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter description"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold" htmlFor="email">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="space-y-4">
          <button type="submit" className="btn w-full btn-outline btn-primary">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
