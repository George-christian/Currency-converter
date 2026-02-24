import React from "react";
import heroImage from "../assets/images/logo.png";

function Hero() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">
          Convert currencies instantly
        </h2>
        <p className="text-blue-700 mb-8 text-lg">
          Easily convert between any currencies with real-time exchange rates.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-6">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
