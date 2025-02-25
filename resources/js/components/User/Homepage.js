import React from "react";

const Homepage = () => {
    const products = {
        men: [
            {
                id: 1,
                name: "Men’s High-Top Leather",
                price: "$90.00",
                image: "https://i.pinimg.com/736x/1c/5e/ab/1c5eabc0669cacc0c3ae2b53a3837717.jpg",
                rating: 4.5,
            },
            {
                id: 2,
                name: "Men’s High-Top Leather",
                price: "$90.00",
                image: "/path-to-men-shoe-2.jpg",
                rating: 4.5,
            },
            {
                id: 3,
                name: "Men’s High-Top Leather",
                price: "$90.00",
                image: "/path-to-men-shoe-3.jpg",
                rating: 4.5,
            },
            {
                id: 4,
                name: "Men’s High-Top Leather",
                price: "$90.00",
                image: "/path-to-men-shoe-3.jpg",
                rating: 4.5,
            },
        ],
        women: [
            {
                id: 5,
                name: "Women’s Strappy Heels",
                price: "$85.00",
                image: "/path-to-women-shoe-1.jpg",
                rating: 4.7,
            },
            {
                id: 6,
                name: "Women’s Strappy Heels",
                price: "$85.00",
                image: "/path-to-women-shoe-2.jpg",
                rating: 4.7,
            },
            {
                id: 7,
                name: "Women’s Strappy Heels",
                price: "$85.00",
                image: "/path-to-women-shoe-3.jpg",
                rating: 4.7,
            },
            {
                id: 8,
                name: "Women’s Strappy Heels",
                price: "$85.00",
                image: "/path-to-women-shoe-3.jpg",
                rating: 4.7,
            },
        ],
        unisex: [
            {
                id: 9,
                name: "Unisex Classic Sneakers",
                price: "$80.00",
                image: "/path-to-unisex-shoe-1.jpg",
                rating: 4.8,
            },
            {
                id: 10,
                name: "Unisex Classic Sneakers",
                price: "$80.00",
                image: "/path-to-unisex-shoe-2.jpg",
                rating: 4.8,
            },
            {
                id: 11,
                name: "Unisex Classic Sneakers",
                price: "$80.00",
                image: "/path-to-unisex-shoe-3.jpg",
                rating: 4.8,
            },
            {
                id: 12,
                name: "Unisex Classic Sneakers",
                price: "$80.00",
                image: "/path-to-unisex-shoe-3.jpg",
                rating: 4.8,
            },
        ],
        popular: [
            {
                id: 13,
                name: "Popular High-Top Leather",
                price: "$90.00",
                image: "/path-to-popular-shoe-1.jpg",
                rating: 4.6,
            },
            {
                id: 14,
                name: "Popular High-Top Leather",
                price: "$90.00",
                image: "/path-to-popular-shoe-2.jpg",
                rating: 4.6,
            },
            {
                id: 15,
                name: "Popular Classic Sneakers",
                price: "$80.00",
                image: "/path-to-popular-shoe-3.jpg",
                rating: 4.6,
            },
            {
                id: 16,
                name: "Popular Classic Sneakers",
                price: "$80.00",
                image: "/path-to-popular-shoe-3.jpg",
                rating: 4.6,
            },
        ],
    };

    // Function to render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push("★");
            } else if (hasHalfStar && i === fullStars + 1) {
                stars.push("☆"); // Half star or empty star (adjust as needed)
            } else {
                stars.push("☆");
            }
        }
        return stars.join("");
    };

    return (
        <div className="homepage">
            <section className="hero">
                <img
                    src="/path-to-hero-sneakers.jpg"
                    alt=""
                    className="hero-image"
                />
                <nav className="hero-nav">
                    <ul className="nav-links">
                        <li>
                            <a href="/men" className="nav-link">
                                MEN
                            </a>
                        </li>
                        <li>
                            <a href="/women" className="nav-link">
                                WOMEN
                            </a>
                        </li>
                        <li>
                            <a href="/unisex" className="nav-link">
                                UNISEX
                            </a>
                        </li>
                    </ul>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                        <i className="fa-solid fa-search" />{" "}
                        {/* Font Awesome search icon via CDN */}
                    </div>
                </nav>
                <h1>
                    Stand tall. <br></br>Stay Comfy.
                </h1>
            </section>
            <section className="products-section">
                <h2>What’s New</h2>

                <div className="category">
                    <h3>MEN</h3>
                    <div className="product-grid">
                        {products.men.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <div className="rating">
                                        {renderStars(product.rating)} (
                                        {product.rating})
                                    </div>
                                </div>
                                {/* Add shopping cart icon as a button using HTML <i> element */}
                                <button className="cart-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category">
                    <h3>WOMEN</h3>
                    <div className="product-grid">
                        {products.women.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <div className="rating">
                                        {renderStars(product.rating)} (
                                        {product.rating})
                                    </div>
                                </div>
                                {/* Add shopping cart icon as a button using HTML <i> element */}
                                <button className="cart-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category">
                    <h3>UNISEX</h3>
                    <div className="product-grid">
                        {products.unisex.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <div className="rating">
                                        {renderStars(product.rating)} (
                                        {product.rating})
                                    </div>
                                </div>
                                {/* Add shopping cart icon as a button using HTML <i> element */}
                                <button className="cart-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category popular">
                    <h3>Popular Now</h3>
                    <div className="product-grid">
                        {products.popular.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <div className="rating">
                                        {renderStars(product.rating)} (
                                        {product.rating})
                                    </div>
                                </div>
                                {/* Add shopping cart icon as a button using HTML <i> element */}
                                <button className="cart-icon">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="view-more">View More →</button>
                </div>
            </section>
        </div>
    );
};

export default Homepage;