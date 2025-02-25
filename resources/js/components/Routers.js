import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./LoginPage/Login";
import Signup from "./LoginPage/Signup";
import Footer from "./LoginPage/Footer";
import LandingPage from "./LandingPage"; 
import Homepage from "./User/Homepage";
import Dashboard from "./Admin/Dashboard.js";
import Header from "./LoginPage/Header";

const App = () => {
    const location = useLocation();
    
    // Define routes where Header should be hidden
    const hideHeaderRoutes = ["/", "/login", "/signup"];

    // Define routes where Footer should be hidden
    const hideFooterRoutes = ["/login", "/signup"];

    return (
        <div className="app-container">
            {/* ✅ Show Header ONLY on Homepage */}
            {location.pathname === "/homepage" && <Header />}

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

            {/* ✅ Hide Footer on Login & Signup pages */}
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
};

// Wrapping App with Router
const Root = () => (
    <Router>
        <App />
    </Router>
);

// React 18 Rendering
const root = document.getElementById("root");
if (root) {
    ReactDOM.createRoot(root).render(<Root />);
}
