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
        fetch(`http://localhost:5000/allCars/${id}`, {
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
    <div>
      <div>
        <img className="w-full h-[180px]" src={image} alt={name} />
      </div>
      <div>
        <h1>Name:{name}</h1>
        <p>Model: {model}</p>
        <p>PricePerDay: {pricePerDay}</p>
        <p>Availability: {availability}</p>
        <p>Features: {features.length}</p>
        <p>Description: {description}</p>
      </div>
      <div>
        <Link to={`/update_my_car/${_id}`}>
          <button className="btn btn-outline btn-primary">Update</button>
        </Link>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => handleDeleteAddedCar(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyCarsCard;
