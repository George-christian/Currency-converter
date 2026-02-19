import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <main className="p-8">
        <h2 className="text-xl font-semibold">Welcome to your Currency Converter!</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
