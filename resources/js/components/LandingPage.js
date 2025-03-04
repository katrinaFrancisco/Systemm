import React, { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Routes, Route, useNavigate } from "react-router-dom";

// Header Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logob.png" alt="Sole'O Logo" />
      </div>
      <div className="nav-links">
        <a href="/login">LOGIN</a> /
        <a href="/signup">REGISTER</a>
      </div>
    </nav>
  );
};

// Modal Component for Cart
const CartModal = ({ isOpen, onClose, navigate }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content cart-modal">
        <p>You need to log in or sign up to add items to your cart.</p>
        <button className="login-signup-button" onClick={() => navigate('/login')}>Login / Sign-up</button>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onCartClick }) => (
  <div className="product-card">
    <div className="product-image" style={{ backgroundImage: `url('/images/${product.name.toLowerCase().replace("'", "").replace(" ", "-")}.jpg')` }}></div>
    <h3 className="product-title">{product.name}</h3>
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color="#FFD700" />
      ))}
    </div>
    <div className="price-cart-container">
      <p className="price">{product.price}</p>
      <button className="cart-button" onClick={onCartClick}>
        <FaShoppingCart className="cart-icon" />
      </button>
    </div>
  </div>
);

// Section Component
const Section = ({ title, products, onCartClick }) => (
  <section className="category-section">
    <div className="section-header">
      <h2 className="category-title">{title}</h2>
      <button className="view-more" 
        style={{ background: "none", border: "none", fontSize: "1rem", fontWeight: "normal", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
        onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
        onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
      >
        <span>View More</span> →
      </button>
    </div>
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onCartClick={() => onCartClick(product)} />
      ))}
    </div>
  </section>
);

// MainApp Component
const MainApp = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const navigate = useNavigate();

  const products = {
    men: [
      { name: "Men's Classic Leather", price: "$60.00" },
      { name: "Men's Classic Leather", price: "$60.00" },
      { name: "Men's Classic Leather", price: "$60.00" },
      { name: "Men's Classic Leather", price: "$60.00" },
    ],
    women: [
      { name: "Women's Heels", price: "$50.00" },
      { name: "Women's Heels", price: "$50.00" },
      { name: "Women's Heels", price: "$50.00" },
      { name: "Women's Heels", price: "$50.00" },
    ],
    unisex: [
      { name: "Unisex Sneakers", price: "$60.00" },
      { name: "Unisex Sneakers", price: "$60.00" },
      { name: "Unisex Sneakers", price: "$60.00" },
      { name: "Unisex Sneakers", price: "$60.00" },
    ],
  };

  const handleCartClick = () => {
    setIsCartModalOpen(true);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1>Stand tall. Stay Comfy.</h1>
          <p>Experience the perfect blend of style, comfort, and durability</p>
          <button className="shop-now" onClick={() => setIsCartModalOpen(true)}>Shop Now</button>
        </div>
      </header>
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} navigate={navigate} />
      <main className="content">
        <h2 className="trending-title">Trending Now!</h2>
        <Section title="MEN" products={products.men} onCartClick={handleCartClick} />
        <Section title="WOMEN" products={products.women} onCartClick={handleCartClick} />
        <Section title="UNISEX" products={products.unisex} onCartClick={handleCartClick} />

        <section className="about-us">
          <div className="about-text">
            <h2>About Us</h2>
            <p>Our mission is to provide high-quality, stylish, and comfortable shoes that cater to all styles and occasions.</p>
            <p>We carefully curate our collection from top brands and trusted manufacturers, ensuring durability, performance, and fashion-forward designs.</p>
            <p>Customer satisfaction is at the heart of everything we do. That’s why we prioritize quality, affordability, and excellent service—so you can shop with confidence.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
};

export default App;