import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="min-h-[calc(100vh-133px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
