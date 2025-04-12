import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    MobileNo: "",
    password: "",
    confirmPassword: "",
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

    // Password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Mobile number validation (10 digits only)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.MobileNo)) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.MobileNo,
      password: formData.password,
    };

    console.log("Sending data:", payload);

    try {
      const res = await fetch("https://your-backend-url.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Signup Success:", data);
        alert("Signup successful!");

        // Clear form
        setFormData({
          name: "",
          email: "",
          MobileNo: "",
          password: "",
          confirmPassword: "",
        });

        // Redirect to login page
        navigate("/login");
      } else {
        const error = await res.text();
        alert("Signup failed: " + error);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1b2b] text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-teal-400">
          Sign Up
        </h2>

        <div>
          <label className="block text-sm mb-1 text-teal-200">Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-teal-500"
            placeholder="Enter your full name"
          />
        </div>

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
          <label className="block text-sm mb-1 text-teal-200">
            Mobile Number
          </label>
          <input
            type="tel"
            required
            pattern="\d{10}"
            value={formData.MobileNo}
            onChange={(e) => handleChange("MobileNo", e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-teal-500"
            placeholder="Enter your 10-digit mobile number"
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
            placeholder="Enter password"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-teal-200">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-teal-500"
            placeholder="Confirm password"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-full transition duration-300"
        >
          Sign Up
        </button>
        <div className="text-teal-200 text-center">
          <p>
            If you don't have an account,{" "}
            <Link
                to="/login"
                className="text-teal-400 underline"
              >
                click here to login.
              </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
