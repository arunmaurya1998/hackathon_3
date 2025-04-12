import { useNavigate } from "react-router-dom";
import { useState } from "react"; // State hook for managing inputs

const Home = () => {
  const navigate = useNavigate();
  
  const [principal, setPrincipal] = useState(""); // EMI calculation inputs
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null); // EMI result state

  const [chatPrompt, setChatPrompt] = useState(""); // ChatGPT inputs
  const [chatResponse, setChatResponse] = useState("");

  // Handle EMI Calculation
  const handleEmiCalculation = async () => {
    const response = await fetch("/api/emi/calculate-emi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ principal, rate, tenure }),
    });
    const data = await response.json();
    setEmi(data.emi);
  };

  // Handle ChatGPT integration
  const handleChatGPT = async () => {
    const response = await fetch("/api/chat/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: chatPrompt }),
    });
    const data = await response.json();
    setChatResponse(data.reply);
  };

  const handleStart = () => {
    navigate("/inputUserData");
  };

  return (
    <div className="text-center px-4 py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Make Your Future Financial Strong
      </h1>

      <h2 className="text-lg md:text-xl max-w-3xl mx-auto mb-4 text-gray-300">
        Your financial life in a spreadsheet,{" "}
        <span className="text-blue-400 font-semibold">automatically</span>{" "}
        updated each day.
      </h2>

      <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-400 mb-8 px-2">
        Our application automatically tracks your financial life within the app itself, with smart AI suggestions for better planning and saving.
      </p>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleStart}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 cursor-pointer"
        >
          Start Your Journey
        </button>
      </div>

      {/* EMI Calculation Section */}
      <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">
          Calculate Your EMI
        </h2>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Enter Principal Amount"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full p-3 rounded-lg text-white"
          />
          <input
            type="number"
            placeholder="Enter Interest Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-3 rounded-lg  text-white"
          />
          <input
            type="number"
            placeholder="Enter Tenure (months)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full p-3 rounded-lg  text-white"
          />
          <button
            onClick={handleEmiCalculation}
            className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-full w-full"
          >
            Calculate EMI
          </button>
          {emi && (
            <div className="text-white mt-4">
              <h3 className="font-bold">Your EMI is: ₹{emi}</h3>
            </div>
          )}
        </div>
      </div>

      {/* ChatGPT Integration Section */}
      <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-teal-400">
          Get Financial Advice from ChatGPT
        </h2>
        <textarea
          placeholder="Ask ChatGPT about your financial queries"
          value={chatPrompt}
          onChange={(e) => setChatPrompt(e.target.value)}
          className="w-full p-3 rounded-lg   text-white"
        />
        <button
          onClick={handleChatGPT}
          className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-full w-full mt-4"
        >
          Ask ChatGPT
        </button>
        {chatResponse && (
          <div className="text-white mt-4">
            <h3 className="font-bold">ChatGPT Response:</h3>
            <p>{chatResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
