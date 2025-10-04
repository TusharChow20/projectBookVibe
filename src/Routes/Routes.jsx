import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Banner from "../Pages/Banner/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/home",
        Component: Banner,
      },
    ],
  },
]);
