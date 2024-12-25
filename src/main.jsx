import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Authprovider from "./auth/AuthProvider/AuthProvider";
import AvailableCars from "./pages/AvailableCars";
import AddCar from "./pages/AddCar";
import MyCars from "./pages/MyCars";
import MyBookings from "./pages/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "available_Cars",
            element: <AvailableCars></AvailableCars>,
          },
          {
            path: "add_Car",
            element: <AddCar></AddCar>,
          },
          {
            path: "my_Cars",
            element: <MyCars></MyCars>,
          },

          {
            path: "my_Bookings",
            element: <MyBookings></MyBookings>,
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
