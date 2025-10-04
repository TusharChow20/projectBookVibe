import { Star } from "lucide-react";
import React from "react";

const Book = ({ eachData }) => {
  //   console.log(eachData);

  return (
    <div>
      <div className="border-2 border-dotted p-3">
        <div className="border-b-2 border-dotted text-xl ">
          <div className="bg-[#13131330] flex justify-center">
            <img className="w-40 h-60 p-3" src={eachData.image} alt="" />
          </div>
          <div className="mt-4 flex justify-end">
            <button className="btn bg-[#23BE0A5A] rounded-2xl">
              {eachData.tags[0]}
            </button>
            <button className="btn bg-[#23BE0A5A] rounded-2xl">
              {eachData.tags[1]}
            </button>
          </div>
          <h1 className="text-left mt-3">{eachData.bookName}</h1>
          <p className="text-left mb-3 font-light">By: {eachData.publisher}</p>
        </div>
        <div className="flex text-xl justify-between p-6">
          <p>{eachData.category}</p>
          <p className="flex items-center gap-2">
            {eachData.rating} <Star />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
