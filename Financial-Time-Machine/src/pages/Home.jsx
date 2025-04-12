import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default Home;

