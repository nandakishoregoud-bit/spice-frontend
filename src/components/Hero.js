import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Pure Spices from Kerala</h1>
                <p>Fresh, natural and directly from farmers</p>
                <button>Shop Now</button>
            </div>

            <div className="hero-image">
                <img
                    src="http://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Spices"
                />
            </div>
        </section>
    );
}