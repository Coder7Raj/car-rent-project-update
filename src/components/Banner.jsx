import React, { useEffect, useState } from "react";

const Banner = () => {
  const slides = [
    {
      id: 1,
      src: "https://i.postimg.cc/66ctRRP8/001-2025-bmw-i4-edrive40-lead.jpg",
      alt: "Slide 1",
      title: "Your Journey, Your Choice",
      description: "Embark on your next adventure with confidence.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/br0n4nhD/2024-jaguar-xf-p300-r-dynamic-101-64e8cdd02fc9a.jpg",
      alt: "Slide 2",
      title: "Discover the Amazing Cars",
      description: "Dive into a world of innovation and style.",
      buttonText: "Get Started",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/vHxwxKgW/yellow-car-gas-station-23-2150697544.jpg",
      alt: "Slide 3",
      title: "Unleash the Power of Performance",
      description: "Get the latest news and trends in Cars.",
      buttonText: "Subscribe Now",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center text-white transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.src})` }}
          aria-hidden={currentSlide !== index}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg mb-4">{slide.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
