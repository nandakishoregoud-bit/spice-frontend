import React from "react";
import "./Products.css";

const products = [
    { name: "Virgin Coconut Oil (500ml)", img: "https://solovelyspices.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-09-30-at-17.59.07-300x300.jpeg" },
    { name: "Whole Black Pepper (250g)", img: "https://solovelyspices.com/wp-content/uploads/2025/05/2-600x600.jpg" },
    {
        name: "Fresh Green Cardamom (50g)", img: "https://solovelyspices.com/wp-content/uploads/2025/05/4.jpg" },
    {
        name: "Fresh Green Cardamom (100g)", img: "https://solovelyspices.com/wp-content/uploads/2025/05/4.jpg" },
    { name: "Honey (100g)", img: "https://solovelyspices.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-02-at-07.38.15-300x300.jpeg" },
    { name: "Virgin Coconut Oil (100ml)", img: "https://solovelyspices.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-09-30-at-17.59.07-300x300.jpeg" },

];

export default function Products() {
    return (
        <section className="products">
            <h2>Our Products</h2>
            <div className="product-grid">
                {products.map((item, index) => (
                    <div className="card" key={index}>
                        <img  src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button>Shop Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
}