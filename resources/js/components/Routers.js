import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login"; // Ensure this path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

// React 18 Fix
if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}



