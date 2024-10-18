import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4  ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="Logo.webp" alt="Home Logo" className="h-10 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-gray-300"
          >
            Home
          </Link>
        </div>

        <div>
          <Link
            to="/dashboard"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
