import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

const SpecialOffers = () => {
  const carOffers = [
    {
      id: 1,
      title: "Luxury Cars at 20% Off",
      description: "Drive premium luxury cars at an unbeatable price.",
      image:
        "https://i.postimg.cc/cC0M6K6b/2025-toyota-sienna-101-66e974c447a4b.jpg",
    },
    {
      id: 2,
      title: "Weekend Special - SUV Rentals",
      description: "Rent an SUV and enjoy unlimited mileage this weekend!",
      image: "https://i.postimg.cc/RZy7KpNf/bmw-750li-xdrive-19-0.jpg",
    },
    {
      id: 3,
      title: "Economy Cars - Save $15/day",
      description: "Affordable and fuel-efficient cars for everyday use.",
      image: "https://i.postimg.cc/brykpKBX/front-left-side-47.jpg",
    },
    {
      id: 4,
      title: "Free GPS with Rentals",
      description:
        "Navigate easily with a free GPS on all rentals above 2 days.",
      image:
        "https://i.postimg.cc/V6Lk6mmF/9e5cd1c3ac45fd95a4bf1aa59de7a5e0.jpg",
    },
    {
      id: 5,
      title: "Family Van Discounts",
      description: "Perfect for family trips - Get 25% off on vans.",
      image: "https://i.postimg.cc/N0RHTshq/1608-Kia-Niro-06-jpg.webp",
    },
    {
      id: 6,
      title: "Long-Term Rentals - 30% Off",
      description: "Great savings on rentals for 7 days or more.",
      image:
        "https://i.postimg.cc/TPvyTzKk/2023-honda-accord-hybrid-touring-lt-intro-389-654292a591345.jpg",
    },
  ];

  return (
    <div className="p-2 mt-16">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-100">
          Special Offers
        </h1>
        <p className="text-gray-300">
          Drive your dream car for less! Enjoy discounts on luxury rides, SUVs,
          and family vans, <br /> plus perks like free GPS and unlimited
          mileage. Book now and save big!
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={80}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          className="overflow-hidden mr-4"
        >
          {carOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {offer.title}
                </h2>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SpecialOffers;
