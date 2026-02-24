import React from "react";

function CurrencySelect({ selected, setSelected, currencies }) {
  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelect;