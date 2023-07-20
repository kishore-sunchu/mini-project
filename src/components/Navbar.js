import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo  from "../photos/logo-without-background.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-3 bg-slate-50 font-serif">
        <div className="flex items-center flex-shrink-0 mr-6 w-1/2 lg:mr-72 text-black">
          <div className="w-100 h-14 mr-2">
            <img src={logo} alt="logo" className="mix-blend-mode: screen h-full" />
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}>
          <div className="lg:flex-grow lg:flex lg:justify-evenly text-lg">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Home
            </Link>
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              About Us
            </Link>
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Log in
            </Link>
            <Link
              to="/signup"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
