import React, { useState } from "react";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="signup-wrapper"
    style={{ backgroundImage: "url('/images/blurbg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
>
      <div className="signup-container">
        <h2>Create Account</h2>

        {/* Last Name */}
        <div className="input-group">
          <label></label>
          <input type="text" placeholder="Last Name" required />
        </div>

        {/* First Name */}
        <div className="input-group">
          <label></label>
          <input type="text" placeholder="First Name" required />
        </div>

        {/* Username */}
        <div className="input-group">
          <label></label>
          <input type="text" placeholder="Username" required />
        </div>

        {/* Email */}
        <div className="input-group">
          <label></label>
          <input type="email" placeholder="Email" required />
        </div>

        {/* Password */}
        <div className="input-group password-container">
          <label></label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
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
          <label></label>
          <div className="password-input">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <Icon path={confirmPasswordVisible ? mdiEyeOff : mdiEye} size={1} />
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="signup-button">Sign Up</button>

        {/* Login Link */}
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
