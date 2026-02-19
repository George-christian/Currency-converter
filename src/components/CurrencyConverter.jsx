import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import CurrencySelect from "./CurrencySelect";

const rates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.81,
  NGN: 1350,
  JPY: 150,
  CHF: 0.78,
  CAD: 1.37,
  CNY: 6.94,
  AED: 3.67,
};

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);

  const convertedAmount = ((amount / rates[fromCurrency]) * rates[toCurrency]).toFixed(2);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-lg">
        <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Currency Converter
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CurrencyInput
            amount={amount}
            onAmountChange={(e) => setAmount(e.target.value)}
            currency={fromCurrency}
            onCurrencyChange={(e) => setFromCurrency(e.target.value)}
          />
          <div className="text-center my-4 text-blue-700 font-semibold">
            = {convertedAmount} {toCurrency}
          </div>
          <CurrencySelect
            currency={toCurrency}
            onCurrencyChange={(e) => setToCurrency(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default CurrencyConverter;
