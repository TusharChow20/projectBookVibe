import React from "react";

const Banner = () => {
  return (
    <div className="xl:px-20 mt-4 md:mt-10 ">
      <div className="p-5 md:p-20 lg:px-50 xl:p-20  bg-[#13131330] flex  flex-col-reverse xl:flex-row justify-between">
        <div className="flex flex-col  items-start xl:w-1/2">
          <h1 className="text-2xl md:text-4xl xl:text-7xl font-bold mt-10 ">
            Books to freshen up you bookshelf
          </h1>
          <button className="btn bg-green-500 md:text-2xl md:p-7 rounded-xl mt-4 md:mt-12 ">
            View The List
          </button>
        </div>
        <div>
          <img src="/books.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
