import React, { useState } from "react";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-wrapper"> {/* Wrapper for centering */}
      <div className="login-container">
        <h2>Log-in to Account</h2>

        {/* Email Input */}
        <div className="input-group">
          <label></label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        {/* Password Input */}
        <div className="input-group password-container">
          <label></label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
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
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="login-button">Login</button>

        {/* Signup Link */}
        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Signup Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
