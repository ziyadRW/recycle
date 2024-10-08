import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImamuLogo from "../resources/imamu-2_1.png";
import AppLogo from "../resources/image-removebg-preview.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-600 p-4 flex justify-between items-center relative">
      <div className="flex space-x-4">
        <a href="https://imamu.edu.sa/Pages/default.aspx">
          <img src={ImamuLogo} alt="Logo 2" className="h-12" />
        </a>
        <Link to="/">
          <img
            src={AppLogo}
            alt="Logo 1"
            className="h-16 shadow-lg"
          />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-green-600 text-center`}>
        <ul className="space-y-4 py-4">
          <li><Link to="/" className="block hover:text-black">Home</Link></li>
          <li><Link to="/about" className="block hover:text-black">About Us</Link></li>
          <li><Link to="/locations" className="block hover:text-black">Recycling Here</Link></li>
          <li><Link to="/news" className="block hover:text-black">News</Link></li>
          <li>
            <Link to="/login" className="block px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-100">Login</Link>
          </li>
          <li>
            <Link to="/register" className="block px-4 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600">Register</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center md:space-x-6 text-white">
        <ul className="md:flex space-x-6">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/about" className="hover:text-black">About Us</Link></li>
          <li><Link to="/locations" className="hover:text-black">Recycling Here</Link></li>
          <li><Link to="/news" className="hover:text-black">News</Link></li>
        </ul>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <Link
            to="/login"
            className="bg-white text-green-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
