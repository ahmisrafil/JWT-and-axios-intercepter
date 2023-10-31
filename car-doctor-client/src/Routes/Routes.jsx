import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        // {
        //     path:
        //     element: 
        // },
        // {
        //     path:
        //     element: 
        // },
        // {
        //     path:
        //     element: 
        // },
      ]
    },
  ]);

export default router;