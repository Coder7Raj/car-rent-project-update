import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateMyCar = () => {
  const { user } = useContext(AuthContext);
  const car = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    description,
    features,
    availability,
    pricePerDay,
    model,
    image,
    name,
  } = car;
  const handleUpdatedCar = async (e) => {
    e.preventDefault();
    const updatedReview = {
      name: e.target.name.value,
      image: e.target.image.value,
      model: e.target.model.value,
      pricePerDay: e.target.pricePerDay.value,
      availability: e.target.availability.value === "true",
      features: [
        e.target.feature1.value,
        e.target.feature2.value,
        e.target.feature3.value,
      ],
      description: e.target.description.value,
    };

    try {
      const result = await Swal.fire({
        title: "Save changes?",
        showDenyButton: true,
        confirmButtonText: "Save",
        denyButtonText: "Don't save",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `https://car-rent-server-wine.vercel.app/allCars/${_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedReview),
          }
        );

        const data = await response.json();
        if (data.modifiedCount > 0) {
          Swal.fire("Saved!", "Your review has been updated.", "success");
          navigate("/available_Cars");
        } else {
          Swal.fire("Info", "No changes were made.", "info");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (error) {
      console.error("Error updating review:", error);
      Swal.fire(
        "Error!",
        "Failed to update the review. Try again later.",
        "error"
      );
    }
  };
  return (
    <div className="mt-4 mb-4">
      <form
        onSubmit={handleUpdatedCar}
        className="p-3 space-y-4 bg-white shadow-lg rounded-md"
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
            defaultValue={name}
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
            defaultValue={image}
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
            defaultValue={model}
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
            defaultValue={pricePerDay}
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
            defaultValue={availability}
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
            defaultValue={features?.[0] || ""}
          />
          <input
            type="text"
            name="feature2"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Feature 2"
            required
            defaultValue={features?.[1] || ""}
          />
          <input
            type="text"
            name="feature3"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Feature 3"
            required
            defaultValue={features?.[2] || ""}
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
            defaultValue={description}
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
            Add Updated Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyCar;
