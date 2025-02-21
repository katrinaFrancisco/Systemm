import React, { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Log-in to Account</h2>
        
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-black"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-600 text-sm">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="********"
            className="w-full px-3 py-2 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-black"
          />
          <button
            type="button"
            className="absolute right-2 top-9 text-gray-500"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "🙈" : "👁️"}
          </button>
        </div>

        <div className="text-right mb-4">
          <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
        </div>

        <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-80">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account? <a href="#" className="text-blue-500 font-semibold">Signup Here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
