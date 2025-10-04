import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <div className=" bg-base-100 shadow-sm flex justify-between px-2 md:px-10 mt-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/listedBooks">Listed Books</Link>
              </li>
              <li>
                <a>Pages to Read</a>
              </li>
              <li>
                <a className="btn bg-green-700 rounded-xl">Sign In</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal text-2xl ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/listedBooks">Listed Books</Link>
            </li>
            <li>
              <Link to={"pagesToRead"}>Pages to Read</Link>
            </li>
          </ul>
        </div>
        <div className="flex  gap-3 items-center">
          <a className="btn bg-green-700 rounded-xl hidden lg:flex text-2xl p-3 md:p-5 lg:p-7">
            Sign In
          </a>
          <a
            className="btn bg-blue-600 rounded-xl md:text-2xl md:p-5 lg:p-7"
            href=""
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
