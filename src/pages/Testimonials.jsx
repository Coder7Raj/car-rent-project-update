import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image:
        "https://p7.hiclipart.com/preview/481/915/760/computer-icons-user-avatar-woman-avatar.jpg",
      email: "john.doe@example.com",
      feedback:
        "This car rental service is amazing! The cars are in great condition, and the process was super smooth.",
    },
    {
      id: 2,
      image:
        "https://p7.hiclipart.com/preview/481/915/760/computer-icons-user-avatar-woman-avatar.jpg",
      email: "jane.smith@example.com",
      feedback:
        "I had a wonderful experience renting from here. Highly recommend it to everyone!",
    },
    {
      id: 3,
      image:
        "https://p7.hiclipart.com/preview/481/915/760/computer-icons-user-avatar-woman-avatar.jpg",
      email: "alex.jones@example.com",
      feedback:
        "Great service and excellent cars. I will definitely use their service again.",
    },
    {
      id: 4,
      image:
        "https://p7.hiclipart.com/preview/481/915/760/computer-icons-user-avatar-woman-avatar.jpg",
      email: "sara.williams@example.com",
      feedback:
        "The booking process was so easy, and the staff was very helpful. Thank you!",
    },
    {
      id: 5,
      image:
        "https://p7.hiclipart.com/preview/481/915/760/computer-icons-user-avatar-woman-avatar.jpg",
      email: "michael.brown@example.com",
      feedback:
        "Affordable prices and top-notch vehicles. I couldn’t ask for more!",
    },
    {
      id: 6,
      image:
        "https://p7.hiclipart.com/preview/481/915/760/computer-icons-user-avatar-woman-avatar.jpg",
      email: "linda.green@example.com",
      feedback:
        "This is the best car rental experience I have ever had. Highly satisfied!",
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6 mt-10">Testimonials</h2>
        <p className="text-gray-600">
          Discover why our customers love us! From seamless booking to top-notch
          cars, <br /> hear directly from our satisfied users about their
          incredible experiences.
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
          className="overflow-hidden p-5 bg-gray-100"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 h-60 w-72"
            >
              <img
                src={testimonial.image}
                alt="User"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-center text-gray-700 font-medium">
                {testimonial.email}
              </p>
              <p className="text-center text-gray-500 mt-4">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
