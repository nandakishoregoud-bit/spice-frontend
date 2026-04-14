import React, { useState } from "react";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="https://solovelyspices.com/wp-content/uploads/2025/05/1000223141-1-2048x2048.jpg"
                    alt="SoLovely Spices"
                />
                <span>SoLovely Spices</span>
            </div>

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* Navigation */}
            <nav className={menuOpen ? "nav active" : "nav"}>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}