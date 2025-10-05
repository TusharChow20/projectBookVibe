import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Banner from "../Pages/Banner/Banner";
import Home from "../Pages/Home/Home";
import axios from "axios";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/home",
        loader: () => axios("/booksData.json"),
        Component: Home,
      },
      {
        path: "/bookDetails/:id",
        loader: () => axios("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/listedBooks",
        loader: () => axios("/booksData.json"),
        Component: ListedBooks,
      },
    ],
  },
]);
