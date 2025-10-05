import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../../utilites/localStorageData";

const BookDetails = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  const bookClicked = data.find((book) => book.bookId === parseInt(id));
  const handleReadList = (id) => {
    addToLocalStorage(id);
  };
  return (
    <div className="lg:flex gap-20 justify-center items-center min-h-screen md:px-4">
      <div className="lg:w-1/2 bg-[#13131330] flex justify-center rounded-2xl items-center h-100 lg:h-200 ">
        <img
          className="w-40 h-60 lg:w-60 lg:h-100 rotate-x-[20deg]"
          src={bookClicked.image}
          alt=""
        />
      </div>
      <div className="lg:w-1/2  md:text-2xl p-10">
        <h1 className="text-4xl font-bold">{bookClicked.bookName}</h1>
        <p className="mb-4 mt-3">By: {bookClicked.author}</p>
        <p className="border-t-2 border-dashed border-b-2 py-6">
          {bookClicked.category}
        </p>
        <p className="mt-5">
          <span className="font-bold">Review:</span> {bookClicked.review}
        </p>
        <p className="flex gap-4 border-b-2 border-dashed p-3">
          Tag
          <button className="btn bg-[#23BE0A5A] rounded-2xl">
            {bookClicked.tags[0]}
          </button>
          <button className="btn bg-[#23BE0A5A] rounded-2xl">
            {bookClicked.tags[1]}
          </button>
        </p>
        <div className="w-4/5 ">
          <div className="mt-4 flex justify-between">
            <p>Number of Pages: </p>
            <p className="font-bold">{bookClicked.totalPages}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <p>Publisher: </p>
            <p className="font-bold">{bookClicked.publisher}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <p>Year of Publishing: </p>
            <p className="font-bold">{bookClicked.yearOfPublishing}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <p>Rating: </p>
            <p className="font-bold">{bookClicked.rating}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="btn p-5 rounded-xl text-xl ">Wishlist</button>
          <button
            onClick={() => handleReadList(id)}
            className="btn p-5 rounded-xl text-xl bg-blue-500"
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
