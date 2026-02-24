import React, { useState, useEffect } from "react";

function CurrencyConverter() {
  const API_KEY = "dd8009259bac7b4108e5f328";

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  // Fetch only when fromCurrency changes
  useEffect(() => {
    async function getRates() {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
        );

        const data = await res.json();

        console.log("API RESPONSE:", data); // 🔎 Debug

        if (data.result === "success") {
          setRates(data.conversion_rates);
          setError("");
        } else {
          setError("API Error: " + data["error-type"]);
        }
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setError("Network error occurred.");
      }
    }

    getRates();
  }, [fromCurrency]);

  // Calculate conversion
  useEffect(() => {
    if (rates && rates[toCurrency]) {
      setResult((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Currency Converter
      </h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      {rates && (
        <div className="flex gap-4 mb-6">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full border p-3 rounded"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full border p-3 rounded"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {!error && result && (
        <div className="text-center text-xl font-semibold">
          {amount} {fromCurrency} = {result} {toCurrency}
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;