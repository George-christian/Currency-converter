import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center space-x-3">
          
         
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-2xl shadow-lg">
            <img
              src={logo}
              alt="Logo"
              className="h-6 w-6 object-contain"
            />
          </div>

          <h1 className="text-xl font-semibold text-gray-900">
            ChrisTech
          </h1>
        </div>

        <div className="flex items-center space-x-8">
          
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-black transition">
              Live Rates
            </a>
            <a href="#" className="hover:text-black transition">
              Features
            </a>
            <a href="#" className="hover:text-black transition">
              About
            </a>
          </nav>

          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition">
            Start Converting
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;