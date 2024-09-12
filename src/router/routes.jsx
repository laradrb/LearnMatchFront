import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/AboutLM"
import About2 from "../pages/AboutLM2";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp"
import Filters from "../pages/Filters"
import Results from "../pages/Results"
import Availability from "../pages/Availability"
import Chat from "../pages/Chat"
import MyCourses from "../pages/MyCourses"
import Profile from "../pages/Profile"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutLM", element: <About /> },
      { path: "/aboutLM2", element: <About2 /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/search", element: <Filters /> },
      { path: "/results", element: <Results /> },
      { path: "/availability", element: <Availability /> },
      { path: "/chat", element: <Chat /> },
      { path: "/mycourses", element: <MyCourses /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);