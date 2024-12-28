import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookLists, setBookLists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:5000/bookLists?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookLists(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const handleBookingCars = (id) => {
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
        fetch(`http://localhost:5000/bookList/${id}`, {
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
              const remainingBookLists = bookLists.filter(
                (bookList) => bookList._id !== id
              );
              setBookLists(remainingBookLists);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="p-2">
      {bookLists?.length > 0 ? (
        bookLists?.map((bookList) => (
          <div
            key={bookList._id}
            className="shadow-md rounded-md py-1 lg:px-10 md:px-8 px-2 bg-white mb-2"
          >
            <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center gap-2">
              <div className="flex lg:flex-row md:flex-row flex-col gap-6 justify-between items-center">
                <p className="text-md font-semibold">
                  No: {bookLists.indexOf(bookList) + 1}
                </p>
                <div>
                  <img
                    className="lg:w-44 md:w-44 w-full lg:h-24 md:h-24 h-48 rounded-md"
                    src={bookList.image}
                    alt={bookList.name}
                  />
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                  <p className="text-md font-semibold">
                    Title:
                    <span className="text-md font-semibold text-gray-600">
                      {bookList.name}
                    </span>
                  </p>
                  <p className="text-md font-semibold">
                    Model:
                    <span className="text-md font-semibold text-gray-600">
                      {bookList.model}
                    </span>
                  </p>
                </div>
              </div>
              <div className="lg:w-auto md:w-auto w-full">
                <button
                  className="btn btn-warning w-full"
                  onClick={() => handleBookingCars(bookList._id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No bookList items found.</p>
      )}
    </div>
  );
};

export default MyBookings;
