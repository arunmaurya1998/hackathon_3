import React, { useEffect, useState } from "react";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Mock data — replace with actual API call later
    const mockStories = [
      {
        id: 1,
        name: "Amit Sharma",
        story:
          "I started saving with just ₹5,000/month. In 3 years, I bought my dream car. Thanks to this app's planning!",
      },
      {
        id: 2,
        name: "Priya Verma",
        story:
          "From being clueless to owning a home — this tool showed me how to budget and invest smartly.",
      },
      {
        id: 3,
        name: "Rohit Yadav",
        story:
          "I was able to plan for my wedding and a Europe trip without stress. All thanks to dream tracking!",
      },
    ];

    setTimeout(() => setStories(mockStories), 1000); // simulate loading
  }, []);

  return (
    <div className="bg-[#0a1b2b] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        Real Success Stories
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {stories.length === 0 ? (
          <p className="text-center text-gray-300 col-span-full">Loading stories...</p>
        ) : (
          stories.map((s) => (
            <div
              key={s.id}
              className="bg-[#102c44] p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-teal-500"
            >
              <p className="text-gray-300 italic mb-4">"{s.story}"</p>
              <h4 className="text-lg font-semibold text-teal-300 text-right">— {s.name}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SuccessStories;
