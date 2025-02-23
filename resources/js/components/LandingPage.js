import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logob.png" alt="Sole'O Logo" />
      </div>
      <nav className="auth-links">
        <a href="/login">LOGIN</a> / <a href="/register">REGISTER</a>
      </nav>
    </header>
  );
};

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

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="image-placeholder"></div>
    <h3 className="product-title">{product.name}</h3>
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color="#FFD700" />
      ))}
    </div>
    <div className="price-cart-container">
      <p className="price">{product.price}</p>
      <button className="cart-button" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
        <FaShoppingCart className="cart-icon" style={{ fontSize: "1.5rem" }} />
      </button>
    </div>
  </div>
);

const Section = ({ title, products }) => (
  <section className="category-section">
    <div className="section-header">
      <h2 className="category-title">{title}</h2>
      <button className="view-more" style={{ background: "none", border: "none", fontSize: "1rem", fontWeight: "normal", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
        onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
        onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
      >
        <span>View More</span> →
      </button>
    </div>
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </section>
);

const App = () => {
  return (
    <div className="landing-page">
      <Header /> {/* Added Header Component Here */}
      <header className="hero" style={{ backgroundImage: "url('/images/Lshoes.png')" }}>
        <div className="hero-content">
          <h1>Stand tall. Stay Comfy.</h1>
          <p>Experience the perfect blend of style, comfort and durability</p> 
          <button className="shop-now">Shop Now</button>
        </div>
      </header>
      <main className="content">
        <h2 className="trending-title">Trending Now!</h2>
        <Section title="MEN" products={products.men} />
        <Section title="WOMEN" products={products.women} />
        <Section title="UNISEX" products={products.unisex} />

        {/* About Us */}
        <section className="about-us">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Our mission is to provide high-quality, stylish, and comfortable shoes that cater to all styles...
            </p>
          </div>
          <div className="about-image"></div>
        </section>
      </main>
    </div>
  );
};

export default App;
