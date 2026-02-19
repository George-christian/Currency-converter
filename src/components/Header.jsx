import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Currency Converter</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">Features</li>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
