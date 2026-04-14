import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={"https://solovelyspices.com/wp-content/uploads/2025/05/1000223141-1-2048x2048.jpg"} alt="SoLovely Spices" />
                <span>SoLovely Spices</span>
            </div>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}