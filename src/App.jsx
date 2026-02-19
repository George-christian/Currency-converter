import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-xl font-semibold">Welcome to your Currency Converter!</h2>
      </main>
    </div>
  );
}

export default App;
