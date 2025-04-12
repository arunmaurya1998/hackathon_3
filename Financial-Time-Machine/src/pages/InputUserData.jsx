import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FinancialReportForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
    income: "",
    emi: "",
    expenses: "",
  });

  const navigate = useNavigate();
  const [dreams, setDreams] = useState([{ name: "", price: "" }]);

  // Handle input change for user data
  const handleInputChange = (key, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Handle input change for dreams
  const handleDreamChange = (index, key, value) => {
    const newDreams = [...dreams];
    newDreams[index][key] = value;
    setDreams(newDreams);
  };

  // Add a new dream
  const addDream = () => {
    setDreams([...dreams, { name: "", price: "" }]);
  };

  // Remove a dream
  const removeDream = (index) => {
    const newDreams = dreams.filter((_, i) => i !== index);
    setDreams(newDreams);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Prepare data to send to the backend
    const formData = {
      personalInfo: userData,
      dreams: dreams,
    };

    console.log("Form Data:", formData); // Log data to verify it's correct

    try {
      // Dummy API URL - replace with your actual URL later
      const response = await fetch("https://dummyapi.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert("Data submitted successfully!");
        setUserData({
          name: "",
          age: "",
          gender: "",
          income: "",
          emi: "",
          expenses: "",
        });
        setDreams([{ name: "", price: "" }]);
        navigate("/report");
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error occurred.");
      setUserData({
        name: "",
        age: "",
        gender: "",
        income: "",
        emi: "",
        expenses: "",
      });
      setDreams([{ name: "", price: "" }]);
    }
  };

  return (
    <div className="text-white p-6" style={{ backgroundColor: "#0a1b2b" }}>
      <h1 className="text-4xl font-bold mb-6 text-center">
        Check Your Financial Report
      </h1>
      <p className="text-teal-300 text-2xl font-semibold text-center mb-6">
        Your data is 100% secure and encrypted.
      </p>

      <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl mx-auto">
        {/* Section 1: Personal Info */}
        <div>
          <h2 className="text-xl font-semibold text-teal-500 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 text-teal-200">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={userData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-teal-200">Age</label>
              <input
                type="number"
                placeholder="Enter your age"
                value={userData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-teal-200">Gender</label>
              <select
                value={userData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-teal-500"
                required
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Income/EMI/Expenses */}
        <div>
          <h2 className="text-xl font-semibold text-teal-500 mb-4">
            Monthly Income / Expenses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Monthly Income", key: "income" },
              { label: "Monthly EMI", key: "emi" },
              { label: "Monthly Expenses", key: "expenses" },
            ].map((item, i) => (
              <div key={i}>
                <label className="block mb-1 text-teal-200">{item.label}</label>
                <input
                  type="number"
                  placeholder={`Enter ${item.label.toLowerCase()}`}
                  value={userData[item.key]}
                  onChange={(e) => handleInputChange(item.key, e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-teal-500"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Dreams */}
        <div>
          <h2 className="text-xl font-semibold text-teal-500 mb-4">
            Your Dreams
          </h2>
          {dreams.map((dream, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter your dream like Car, House, Travel..."
                value={dream.name}
                onChange={(e) =>
                  handleDreamChange(index, "name", e.target.value)
                }
                className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-teal-500"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={dream.price}
                onChange={(e) =>
                  handleDreamChange(index, "price", e.target.value)
                }
                className="w-32 px-4 py-2 rounded bg-gray-800 text-white border border-teal-500"
                required
              />
              {index === 0 ? (
                <button
                  type="button"
                  onClick={addDream}
                  className="text-teal-400 hover:text-teal-600"
                >
                  ➕
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={addDream}
                    className="text-teal-400 hover:text-teal-600"
                  >
                    ➕
                  </button>
                  <button
                    type="button"
                    onClick={() => removeDream(index)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ❌
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-100 cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-full transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancialReportForm;
