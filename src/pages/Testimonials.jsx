import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image:
        "https://i.postimg.cc/PfCdF6xN/happy-man-ai-generated-portrait-user-profile-1119669-1.jpg",
      email: "johndoe@example.com",
      feedback:
        "This car rental service is amazing! The cars are in great condition, and the process was super smooth.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/cHV2zB98/image.jpg",
      email: "janesmith@example.com",
      feedback:
        "I had a wonderful experience renting from here. Highly recommend it to everyone!",
    },
    {
      id: 3,
      image:
        "https://i.postimg.cc/KvhCrQ36/d9729c556e9e19d7ddf2bd12dd5df71a.jpg",
      email: "alexjones@example.com",
      feedback:
        "Great service and excellent cars. I will definitely use their service again.",
    },
    {
      id: 4,
      image:
        "https://i.postimg.cc/gJRNxFsn/large-plan-portrait-young-man-with-glasses-with-his-tongue-stuck-out-150254-966.jpg",
      email: "sarawilliams@example.com",
      feedback:
        "The booking process was so easy, and the staff was very helpful. Thank you!",
    },
    {
      id: 5,
      image:
        "https://i.postimg.cc/pXBcQvHj/indoor-shot-serious-man-with-grumpy-expression-being-discontent-with-noisy-neighbours-dressed-casual.jpg",
      email: "michaelbrown@example.com",
      feedback:
        "Affordable prices and top-notch vehicles. I couldn’t ask for more!",
    },
    {
      id: 6,
      image:
        "https://i.postimg.cc/85rnLrpk/photo-1633332755192-727a05c4013d-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
      email: "lindagreen@example.com",
      feedback:
        "This is the best car rental experience I have ever had. Highly satisfied!",
    },
  ];

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-3xl text-gray-100 font-bold mb-4 mt-16">
          Testimonials
        </h2>
        <p className="text-gray-300">
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
          className="overflow-hidden p-3"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-300 shadow-xl rounded-lg p-6 h-80 w-72 transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={testimonial.image}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white"
              />
              <p className="text-center text-black font-semibold text-lg">
                {testimonial.email}
              </p>
              <p className="text-center text-black opacity-80 mt-4">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
