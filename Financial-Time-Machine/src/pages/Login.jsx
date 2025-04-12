import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form validation if needed (like email format, password length)

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    console.log("Sending data:", payload);

    try {
      const res = await fetch("https://your-backend-url.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Login Success:", data);
        alert("Login successful!");

        // Redirect to dashboard or another page after login
        navigate("/dashboard"); // Change '/dashboard' to your desired page
      } else {
        const error = await res.text();
        alert("Login failed: " + error);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong!");
    }
  };

  return(
    <div className="flex items-center justify-center bg-[#0a1b2b] text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-teal-400">Login</h2>
  
        <div>
          <label className="block text-sm mb-1 text-teal-200">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-teal-500"
            placeholder="Enter your email"
          />
        </div>
  
        <div>
          <label className="block text-sm mb-1 text-teal-200">Password</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-teal-500"
            placeholder="Enter your password"
          />
        </div>
  
        <button
          type="submit"
          className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-full transition duration-300"
        >
          Login
        </button>
  
        <div className="text-teal-200 text-center">
          <p>
            If you don't have an account,{" "}
            <Link
                to="/signup"
                className="text-teal-400 underline"
              >
                click here to sign up.
              </Link>
          </p>
        </div>
      </form>
    </div>
  )
  
};

export default Login;
