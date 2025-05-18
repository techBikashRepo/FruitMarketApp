import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign up logic here
    alert("Sign up submitted! (Implement backend logic)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-green-50 to-green-100 py-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-100">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
              placeholder="Enter username"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              placeholder="Enter password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 hover:text-green-700"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-2 font-medium">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
              placeholder="Confirm password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 hover:text-green-700"
              onClick={() => setShowConfirm((v) => !v)}
              tabIndex={-1}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition mt-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
