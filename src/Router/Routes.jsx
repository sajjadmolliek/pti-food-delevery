import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Home/Details/Details";
import Category from "../Pages/Home/Category/Category";
import Favorite from "../Pages/Home/Favorite/Favorite";
import Profile from "../Pages/Home/Profile/Profile";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;
