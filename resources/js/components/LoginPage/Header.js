import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="/images/logob.png" alt="NUP Sole 0 Logo" />
            </div>
            <nav className="header-nav">
                <ul className="nav-icons">
                    <li>
                        <i className="fa-solid fa-bell" />
                    </li>
                    <li>
                        <i className="fa-solid fa-message" />
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-shopping" />
                    </li>
                    <li className="nav-profile">
                        <div className="profile-container">
                            <img
                                src="/path-to-profile-avatar.jpg"
                                alt="Profile"
                                className="profile-avatar"
                            />
                            <span>Gza</span>
                            <i className="fa-solid fa-caret-down" />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;