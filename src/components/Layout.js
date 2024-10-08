import React from "react";
import { Outlet } from "react-router-dom";
import ForestVideo from "../resources/Forest.mp4";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={ForestVideo} type="video/mp4" />
      </video>

      <header className="relative z-10">
        <Header />
      </header>

      <main className="relative z-10 p-8">
        <Outlet />
      </main>

      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
