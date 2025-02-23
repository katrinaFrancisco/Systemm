import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="auth-links">
        <a href="/login">LOGIN</a>
        <a href="/register">REGISTER</a>
      </div>
    </nav>
  );
};

export default Navbar;
