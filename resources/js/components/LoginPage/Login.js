import React, { useState } from "react";
import axios from "axios";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      // Store token & user info in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      setSuccessMessage("Login successful! Redirecting...");
      setError("");

      // Determine Redirect Based on Email Domain
      const emailDomain = formData.email.split("@")[1];

      if (emailDomain === "admin.com") {
        setTimeout(() => navigate("/dashboard"), 1500);
      } else if (emailDomain === "gmail.com") {
        setTimeout(() => navigate("/homepage"), 1500);
      } else {
        setTimeout(() => navigate("/homepage"), 1500); // Default redirect
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data);
      setError(error.response?.data?.message || "Invalid email or password!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Log-in to Account</h2>
        {error && <p className="error-text">{error}</p>}
        {successMessage && <p className="success-text">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group password-container">
            <div className="password-input">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon path={passwordVisible ? mdiEyeOff : mdiEye} size={1} />
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <p className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Signup Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
