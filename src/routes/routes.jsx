import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/products",
          element:<Products></Products>
        },
        {
          path: "/about",
          element:<About></About>
        },
        {
          path: "/contact",
          element:<Contact></Contact>
        },
      ]
    },
  ]);