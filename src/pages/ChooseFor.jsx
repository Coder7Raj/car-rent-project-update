import React from "react";
import { FaCar, FaDollarSign, FaRegHandshake, FaHeadset } from "react-icons/fa";

const ChooseFor = () => {
  const points = [
    {
      id: 1,
      icon: <FaCar size={40} className="text-blue-600" />,
      title: "Wide Variety of Cars",
      description: "From budget-friendly options to luxury vehicles.",
    },
    {
      id: 2,
      icon: <FaDollarSign size={40} className="text-green-600" />,
      title: "Affordable Prices",
      description: "Competitive daily rates you can count on.",
    },
    {
      id: 3,
      icon: <FaRegHandshake size={40} className="text-yellow-600" />,
      title: "Easy Booking Process",
      description: "Seamlessly book your ride in just a few clicks.",
    },
    {
      id: 4,
      icon: <FaHeadset size={40} className="text-red-600" />,
      title: "Customer Support",
      description: "24/7 assistance for all your queries.",
    },
  ];

  return (
    <div className="p-8">
      <div className="text-center mb-6 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Why Choose Us?
        </h1>
        <p className="text-gray-600">
          Experience unmatched car rental services with a wide variety of
          vehicles, competitive prices, <br /> an easy booking process, and 24/7
          customer support. Drive with confidence!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100">
        {points.map((point) => (
          <div
            key={point.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {point.icon}
            <h2 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              {point.title}
            </h2>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseFor;
