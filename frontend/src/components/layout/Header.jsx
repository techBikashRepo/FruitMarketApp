import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-lg py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/assets/apples.jpg"
            alt="Fruit Market Logo"
            className="h-12 w-12 rounded-full border-2 border-green-600 shadow-md bg-white object-cover"
          />
          <span className="text-3xl font-extrabold text-green-700 tracking-tight drop-shadow-sm">
            Fruit Market
          </span>
        </a>
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-green-200 rounded-md text-green-700 hover:bg-green-50 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-6 h-0.5 bg-green-700 mb-1 transition-all duration-200 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-green-700 mb-1 transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-green-700 transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <a
                href="/"
                className="text-lg text-gray-700 hover:text-green-700 font-semibold transition-colors duration-150 border-b-2 border-transparent hover:border-green-600 pb-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/add-product"
                className="text-lg text-gray-700 hover:text-green-700 font-semibold transition-colors duration-150 border-b-2 border-transparent hover:border-green-600 pb-1"
              >
                Add Product
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="ml-6 px-4 py-1 rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="ml-2 px-4 py-1 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile nav */}
        {open && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-green-100 lg:hidden animate-fade-in z-50">
            <ul className="flex flex-col items-center py-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-lg text-gray-700 hover:text-green-700 font-semibold transition-colors duration-150"
                  onClick={() => setOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/add-product"
                  className="text-lg text-gray-700 hover:text-green-700 font-semibold transition-colors duration-150"
                  onClick={() => setOpen(false)}
                >
                  Add Product
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="w-40 block text-center px-4 py-2 rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="w-40 block text-center px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                  onClick={() => setOpen(false)}
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
