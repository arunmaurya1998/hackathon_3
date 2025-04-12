import React, { useEffect, useState } from "react";

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Mock data — replace with API later
    const mockTips = [
      {
        id: 1,
        tip: "Set clear, measurable financial goals like 'Save ₹1 lakh in 12 months'.",
      },
      {
        id: 2,
        tip: "Always save at least 20% of your income every month.",
      },
      {
        id: 3,
        tip: "Avoid impulse purchases by waiting 24 hours before buying non-essentials.",
      },
      {
        id: 4,
        tip: "Automate your savings so it happens without effort.",
      },
    ];

    setTimeout(() => setTips(mockTips), 1000);
  }, []);

  return (
    <div className="bg-[#0a1b2b] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        Helpful Tips for Better Financial Planning
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {tips.length === 0 ? (
          <p className="text-center text-gray-300">Loading tips...</p>
        ) : (
          tips.map((tipItem) => (
            <div
              key={tipItem.id}
              className="bg-[#102c44] p-4 rounded-lg shadow hover:shadow-lg transition duration-300 border-l-4 border-teal-400"
            >
              <p className="text-gray-200">💡 {tipItem.tip}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tips;
