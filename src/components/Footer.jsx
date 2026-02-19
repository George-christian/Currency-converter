import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-16">
      <div className="container mx-auto text-center px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Currency Converter. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
