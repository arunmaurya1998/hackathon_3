import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPricing = async () => {
    try {
      // Replace with your actual API endpoint later
      // const res = await fetch("https://your-api.com/pricing");
      // const data = await res.json();

      // Simulated backend response
      const data = [
        {
          title: "Basic",
          price: "Free",
          features: ["1 Dream Plan", "Basic Analytics", "Limited Support"],
        },
        {
          title: "Pro",
          price: "$9.99/mo",
          features: ["5 Dream Plans", "Full Analytics", "Priority Support"],
        },
        {
          title: "Elite",
          price: "$19.99/mo",
          features: ["Unlimited Plans", "Advanced Reports", "1-on-1 Guidance"],
        },
      ];

      setPlans(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load pricing data:", error);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1b2b] text-white p-8">
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-10">
        Choose the Plan That Fits You
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading pricing plans...</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#102c44] rounded-2xl p-6 shadow-lg flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold text-teal-300">{plan.title}</h2>
              <p className="text-xl font-bold">{plan.price}</p>
              <ul className="text-gray-300 text-sm space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pricing;

  