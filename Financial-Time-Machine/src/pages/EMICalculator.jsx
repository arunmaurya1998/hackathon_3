import React, { useState } from "react";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const handleEmiCalculation = async () => {
    const response = await fetch("/api/emi/calculate-emi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ principal, rate, tenure }),
    });
    const data = await response.json();
    setEmi(data.emi);
  };

  return (
    <div className=" bg-[#0a1b2b] text-white p-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        EMI Calculator
      </h2>
      <div className="max-w-xl mx-auto bg-[#102c44] p-6 rounded-lg shadow-lg">
        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-3 mb-4 rounded text-white"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-3 mb-4 rounded text-white"
        />
        <input
          type="number"
          placeholder="Tenure (months)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="w-full p-3 mb-4 rounded text-white"
        />
        <button
          onClick={handleEmiCalculation}
          className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded"
        >
          Calculate EMI
        </button>
        {emi && (
          <div className="mt-4 text-center text-lg text-green-300">
            Your EMI is: ₹{emi}
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
