import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/AboutLM"
import About2 from "../pages/AboutLM2";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutLM", element: <About /> },
      { path: "/aboutLM2", element: <About2 /> },
    ],
  },
]);