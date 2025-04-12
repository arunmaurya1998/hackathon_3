import React, { useEffect, useState } from "react";

const FuturePlanning = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Simulate backend data — replace this with real API call later
    const mockPlans = [
      {
        id: 1,
        title: "Buy a Dream Car",
        description: "Start saving ₹10,000/month and achieve it in 8 months.",
      },
      {
        id: 2,
        title: "Own a House",
        description: "Plan your EMI and reach your dream in 18 months.",
      },
      {
        id: 3,
        title: "World Tour",
        description: "With consistent savings, plan your trip in just 2 years.",
      },
    ];

    setTimeout(() => setPlans(mockPlans), 1000);
  }, []);

  return (
    <div className="bg-[#0a1b2b] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        Your Future Planning Insights
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.length === 0 ? (
          <p className="text-center col-span-3 text-gray-300">Loading planning insights...</p>
        ) : (
          plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#102c44] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-2">{plan.title}</h3>
              <p className="text-gray-200">{plan.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FuturePlanning;
