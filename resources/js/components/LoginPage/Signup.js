import React, { useState } from "react";
import axios from "axios";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Determine role based on email domain
  const determineRole = (email) => {
    if (email.endsWith("@admin.com")) {
      return "admin";
    } else if (email.endsWith("@gmail.com")) {
      return "user";
    }
    return "user"; // Default role
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    const roleType = determineRole(formData.email);

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirm_password, // Laravel expects this
        role_type: roleType,
      });

      setSuccessMessage("Account created successfully! You can now login.");
      setError("");
    } catch (error) {
      console.error("Registration Error:", error.response?.data);
      setError(
        error.response?.data?.message ||
        "Something went wrong! Please check your inputs."
      );
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <p className="error-text">{error}</p>}
        {successMessage && <p className="success-text">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Last Name */}
          <div className="input-group">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* First Name */}
          <div className="input-group">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Username */}
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
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
                placeholder="Password"
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

          {/* Confirm Password */}
          <div className="input-group password-container">
            <div className="password-input">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                <Icon path={confirmPasswordVisible ? mdiEyeOff : mdiEye} size={1} />
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
