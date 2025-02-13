import React, { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/mainLogo.jpg";
import { AuthContext } from "../auth/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser, handleGoogleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (user) => {
    try {
      const isGoogleUser = user?.providerData.some(
        (provider) => provider.providerId === "google.com"
      );

      if (isGoogleUser) {
        await handleGoogleSignOut();
      } else {
        await logoutUser();
      }

      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 bg-blur backdrop-blur-md z-50 lg:max-w-[1600px] md:max-w-[768px] max-w-[425px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white btn-ghost lg:hidden pr-2 pl-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-50 mt-3 w-52 p-2 shadow flex gap-2"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 ${
                  isActive ? "text-white bg-black p-1 rounded-sm" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/available_cars"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 ${
                  isActive ? "text-white bg-black p-1 rounded-sm" : "text-black"
                }`
              }
            >
              Available Cars
            </NavLink>
            <NavLink
              to="/add_car"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 ${
                  isActive ? "text-white bg-black p-1 rounded-sm" : "text-black"
                }`
              }
            >
              Add Car
            </NavLink>
            <NavLink
              to="/my_cars"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 ${
                  isActive ? "text-white bg-black p-1 rounded-sm" : "text-black"
                }`
              }
            >
              My Cars
            </NavLink>
            <NavLink
              to="/my_bookings"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 ${
                  isActive ? "text-white bg-black p-1 rounded-sm" : "text-black"
                }`
              }
            >
              My Bookings
            </NavLink>
          </ul>
        </div>
        <NavLink to="/" className="text-white flex text-xl font-semibold">
          <img className="lg:w-8 w-6 rounded-[50%]" src={logo} alt="" />
          MotorVista
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-md font-semibold hover:text-white ${
                isActive ? "text-white" : "text-primary"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/available_cars"
            className={({ isActive }) =>
              `text-md font-semibold hover:text-white ${
                isActive ? "text-white" : "text-primary"
              }`
            }
          >
            Available Cars
          </NavLink>
          <NavLink
            to="/add_car"
            className={({ isActive }) =>
              `text-md font-semibold hover:text-white ${
                isActive ? "text-white" : "text-primary"
              }`
            }
          >
            Add Car
          </NavLink>
          <NavLink
            to="/my_cars"
            className={({ isActive }) =>
              `text-md font-semibold hover:text-white ${
                isActive ? "text-white" : "text-primary"
              }`
            }
          >
            My Cars
          </NavLink>
          <NavLink
            to="/my_bookings"
            className={({ isActive }) =>
              `text-md font-semibold hover:text-white ${
                isActive ? "text-white" : "text-primary"
              }`
            }
          >
            My Bookings
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        {user ? (
          <>
            <button>
              {user?.photoURL ? (
                <img
                  className="w-10 h-10 rounded-[50%]"
                  src={user?.photoURL}
                  alt={user?.name}
                />
              ) : (
                <FaRegUserCircle className="w-10 h-10 text-gray-500" />
              )}
            </button>
            <button
              onClick={() => {
                handleLogout();
              }}
              className="btn btn-outline btn-primary"
            >
              LogOut
            </button>
          </>
        ) : (
          <div className="flex gap-1">
            <button className="btn btn-outline btn-primary">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn btn-outline btn-primary">
              <Link to="/register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
