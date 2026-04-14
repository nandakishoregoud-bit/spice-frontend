import React from "react";
import "./SubFooter.css";

export default function SubFooter() {
    return (
        <section className="subfooter">
            <div className="subfooter-container">

                {/* Brand Description */}
                <div className="subfooter-about">
                   <div className="logo">
                <img src={"https://solovelyspices.com/wp-content/uploads/2025/05/1000223141-1-2048x2048.jpg"} alt="SoLovely Spices" />
                <span>SoLovely Spices</span>
            </div>
                    <p>
                        Solovely Spices brings you bold, fresh, and ethically sourced spices<br></br>
                        to transform everyday meals into unforgettable flavor experiences.
                    </p>
                </div>

                {/* Products */}
                <div className="subfooter-links">
                    <h3>Products</h3>
                    <a href="#">Fresh Green Cardamom</a>
                    <a href="#">Whole Black Pepper</a>
                    <a href="#">Virgin Coconut Oil</a>
                    <a href="#">Honey</a>
                </div>

                {/* Links */}
                <div className="subfooter-links">
                    <h3>Links</h3>
                    <a href="#">About</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Refund and Returns</a>
                </div>

            </div>
        </section>
    );
}