import React, { useEffect, useState } from "react";

const InvestmentGuide = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    // Mock data — replace with real API later
    const mockData = [
      {
        id: 1,
        title: "Start with Mutual Funds",
        description: "Great for beginners. SIPs help build discipline with small, regular investments.",
      },
      {
        id: 2,
        title: "Understand Risk Profiles",
        description: "Invest according to your risk tolerance — conservative, moderate, or aggressive.",
      },
      {
        id: 3,
        title: "Diversify Your Portfolio",
        description: "Don’t put all your money in one place. Balance between equity, debt, and gold.",
      },
      {
        id: 4,
        title: "Review Investments Regularly",
        description: "Set a reminder every 6 months to check performance and rebalance if needed.",
      },
    ];

    setTimeout(() => setGuides(mockData), 1000); // simulate loading
  }, []);

  return (
    <div className="bg-[#0a1b2b] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        Your Personal Investment Guide
      </h2>
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {guides.length === 0 ? (
          <p className="text-center text-gray-300 col-span-full">Loading tips...</p>
        ) : (
          guides.map((item) => (
            <div
              key={item.id}
              className="bg-[#102c44] p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-teal-500"
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InvestmentGuide;
