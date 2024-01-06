import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";



const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
      ]
    },
  ]);

export default Routes;