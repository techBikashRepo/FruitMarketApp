import React from "react";

const Header = () => (
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
      <nav>
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
    </div>
  </header>
);

export default Header;
