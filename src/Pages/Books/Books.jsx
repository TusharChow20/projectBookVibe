import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const { data } = useLoaderData();
  return (
    <div className="mt-10 text-4xl font-bold text-center px-10">
      <h1>Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((eachData) => (
          <Book eachData={eachData}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
