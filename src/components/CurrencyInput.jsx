import React from "react";

function CurrencyInput({ amount, onAmountChange, currency, onCurrencyChange }) {
  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="number"
        value={amount}
        onChange={onAmountChange}
        className="flex-1 border p-2 rounded"
      />
      <select
        value={currency}
        onChange={onCurrencyChange}
        className="border p-2 rounded"
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
    </div>
  );
}

export default CurrencyInput;
