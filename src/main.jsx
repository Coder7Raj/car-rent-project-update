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
import Banner from "./components/Banner";
import CarDetails from "./pages/CarDetails";
import Error from "./pages/Error";
import UpdateMyCar from "./pages/UpdateMyCar";
import PrivateRoute from "./Root/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Banner></Banner>,
          },
        ],
      },
      {
        path: "available_cars",
        element: <AvailableCars></AvailableCars>,
      },

      {
        path: "car_details/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-rent-server-wine.vercel.app/allCars/${params.id}`),
      },
      {
        path: "add_car",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "my_cars",
        element: (
          <PrivateRoute>
            <MyCars></MyCars>
          </PrivateRoute>
        ),
      },
      {
        path: "update_my_car/:id",
        element: <UpdateMyCar></UpdateMyCar>,
        loader: ({ params }) =>
          fetch(`https://car-rent-server-wine.vercel.app/allCars/${params.id}`),
      },

      {
        path: "my_bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
