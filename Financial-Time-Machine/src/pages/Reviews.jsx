import React, { useEffect, useState } from "react";

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="text-yellow-400">
      {Array(5)
        .fill()
        .map((_, index) => (
          <span key={index}>{index < rating ? "★" : "☆"}</span>
        ))}
    </div>
  );
};

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate API call — Replace this with real backend fetch
    const mockData = [
      {
        id: 1,
        name: "Ankit Sharma",
        comment: "This tool helped me plan my finances better!",
        rating: 5,
      },
      {
        id: 2,
        name: "Riya Patel",
        comment: "Very intuitive and useful for goal planning.",
        rating: 4,
      },
      {
        id: 3,
        name: "Mohit Verma",
        comment: "Good start, could use more features.",
        rating: 3,
      },
    ];

    setTimeout(() => setReviews(mockData), 1000);
  }, []);

  return (
    <div className="bg-[#0a1b2b] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-10">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.length === 0 ? (
          <p className="text-center col-span-3 text-gray-300">Loading reviews...</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#102c44] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-lg text-gray-200">“{review.comment}”</p>
              <p className="mt-3 text-sm text-teal-300 font-semibold">— {review.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
