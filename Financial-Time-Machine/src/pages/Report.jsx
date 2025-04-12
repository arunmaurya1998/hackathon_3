import React, { useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Report = () => {
  const reportRef = useRef(null);
  const [reportData, setReportData] = useState(null);

  const handleScroll = async () => {
    if (reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Simulate API call
    try {
      const mockResponse = {
        summary:
          "Based on your current savings, you can achieve your goals within 24 months.",
        chartData: [
          { dream: "Car", months: 8, price: 500000 },
          { dream: "House", months: 18, price: 3000000 },
          { dream: "Travel", months: 24, price: 150000 },
        ],
      };

      setTimeout(() => {
        setReportData(mockResponse);
      }, 1000);
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  // Format function for price
  const formatPrice = (price) =>
    `₹${(price / 100000).toFixed(1)}L`; // e.g., ₹5.0L

  // Custom Tooltip content
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-[#1f3a52] p-4 rounded-lg text-white shadow-md">
          <p className="font-semibold">{item.dream}</p>
          <p>Months to achieve: {item.months}</p>
          <p>Estimated cost: {formatPrice(item.price)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-[#0a1b2b] to-[#102c44] text-white min-h-screen p-6">
      {/* Top Section */}
      <div className="pt-32 flex justify-center">
        <div className="text-center space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-300 drop-shadow-lg">
            Ready to Discover When Your Dreams Can Become Reality?
          </h1>
          <p className="text-lg text-gray-300">
            Find out how long it will take to achieve your goals based on your
            current savings.
          </p>
          <button
            onClick={handleScroll}
            className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 animate-pulse"
          >
            Click Here to Find Out!
          </button>
        </div>
      </div>

      {/* Report Section */}
      <div
        ref={reportRef}
        className="mt-20 text-center py-10 px-4 bg-[#0f2a3c] rounded-xl shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-teal-300 mb-4">
          Your Dream Timeline Report
        </h2>

        {!reportData ? (
          <p className="text-gray-300">Fetching your personalized report...</p>
        ) : (
          <>
            <p className="text-gray-200 mb-6">{reportData.summary}</p>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={reportData.chartData.map((item) => ({
                  ...item,
                  dream: `${item.dream} - ${formatPrice(item.price)}`,
                }))}
              >
                <XAxis dataKey="dream" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="months"
                  fill="#14b8a6"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    </div>
  );
};

export default Report;





