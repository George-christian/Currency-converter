import React from "react";

function CurrencySelect({ currency, onCurrencyChange }) {
  return (
    <select
      value={currency}
      onChange={onCurrencyChange}
      className="w-full border p-2 rounded"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="NGN">NGN</option>
      <option value="JPY">JPY</option>
      <option value="CHF">CHF</option>
      <option value="CAD">CAD</option>
      <option value="CNY">CNY</option>
      <option value="AED">AED</option>
    </select>
  );
}

export default CurrencySelect;
