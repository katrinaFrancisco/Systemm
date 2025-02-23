import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./LoginPage/Login"; // Ensure the correct path
import Signup from "./LoginPage/Signup"; // Ensure the correct path
import Footer from "./LoginPage/Footer";
import LandingPage from "./LandingPage"; 

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
                <Footer /> {/* Footer will always be visible */}
            </div>
        </Router>
    );
};

// React 18 Rendering
const root = document.getElementById("root");
if (root) {
    ReactDOM.createRoot(root).render(<App />);
}
