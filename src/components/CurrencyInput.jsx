import React from "react";

function CurrencyInput({
  amount,
  setAmount,
  selectedCurrency,
  setSelectedCurrency,
  currencies,
}) {
  return (
    <div className="flex gap-3 mb-4">
     
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter amount"
      />

      
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="border p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyInput;