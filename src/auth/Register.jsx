import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import animationData from "/public/registerAnimation.json";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Lottie from "react-lottie-player";

const Register = () => {
  const { user, registerUser, setUser, handleGoogleLogin, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully LoggedIn.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and contain at least one uppercase letter.",
      });
      return;
    }

    registerUser(email, password)
      .then((result) => {
        if (result?.user) {
          updateUserProfile({ displayName: name, photoURL: photoURL }, setUser);

          const createdUser = result?.user?.metadata?.creationTime;
          const newUser = { name, email, createdUser };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
              console.log(err);
              setError("Failed to create user in the database");
            });

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to register user");
      });
  };

  const handleRegisterGoogle = () => {
    handleGoogleLogin();
  };

  return (
    <div className="lg:flex-row md:flex-row flex justify-center items-center flex-col gap-4 p-4">
      <div className="lg:w-1/2 md:w-1/2 w-full">
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full h-auto px-6 py-4 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="w-full">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-800 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-6">
            <label
              htmlFor="photoURL"
              className="block text-base font-medium text-gray-800 mb-2"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 pt-7"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Submit and Google Register Buttons */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </div>
          <div className="mb-6">
            <button
              onClick={handleRegisterGoogle}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300"
            >
              <span>Register with Google</span>
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* Link to Login */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
