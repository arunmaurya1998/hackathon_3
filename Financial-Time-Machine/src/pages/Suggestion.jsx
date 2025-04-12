import React, { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Simulated backend data — replace this with actual API later
    const mockSuggestions = [
      {
        id: 1,
        title: "Reduce Unnecessary Subscriptions",
        detail: "Save up to ₹1,000/month by reviewing and canceling unused services.",
      },
      {
        id: 2,
        title: "Track Your Daily Expenses",
        detail: "Use a budgeting app or Excel to monitor and control your spending.",
      },
      {
        id: 3,
        title: "Increase SIP Investment",
        detail: "Boost your savings rate by increasing SIP by ₹500 to reach goals faster.",
      },
    ];

    setTimeout(() => setSuggestions(mockSuggestions), 1000);
  }, []);

  return (
    <div className="bg-[#0a1b2b] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        Smart Suggestions for You
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {suggestions.length === 0 ? (
          <p className="text-center col-span-3 text-gray-300">Loading suggestions...</p>
        ) : (
          suggestions.map((s) => (
            <div
              key={s.id}
              className="bg-[#102c44] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-2">{s.title}</h3>
              <p className="text-gray-200">{s.detail}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Suggestions;
