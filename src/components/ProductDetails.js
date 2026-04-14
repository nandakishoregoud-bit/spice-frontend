import React from "react";
import "./ProductDetails.css";

const productDetails = [
    {
        name: "Fresh Green Cardamom",
        img: "https://solovelyspices.com/wp-content/uploads/2025/05/4.jpg",
        description:
            "Solovely Spices brings you premium cardamom sourced directly from trusted farmers in the hills of Idukki. Every pod is carefully selected to ensure freshness, aroma, and authentic Kerala quality.",
        features: [
            "Farm-Fresh & Handpicked",
            "100% Pure & Chemical-Free",
            "Sealed for Freshness",
        ],
    },
    {
        name: "Whole Black Pepper",
        img: "https://solovelyspices.com/wp-content/uploads/2025/05/2-600x600.jpg",
        description:
            "Our black pepper is naturally grown in Kerala farms and sun-dried to preserve its strong aroma and bold flavor.",
        features: [
            "Bold Aroma & Strong Taste",
            "Naturally Sun-Dried",
            "No Chemicals or Additives",
        ],
    },
    {
        name: "Virgin Coconut Oil",
        img: "https://solovelyspices.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-09-30-at-17.59.07-300x300.jpeg",
        description:
            "Cold-pressed virgin coconut oil made from fresh coconuts. Ideal for cooking, skincare, and hair care.",
        features: [
            "Cold-Pressed Extraction",
            "Rich in Nutrients",
            "Multi-purpose Use",
        ],
    },
];

export default function ProductDetails() {
    return (
        <section className="product-details">
            <h2>Why Our Products Are Special</h2>

            {productDetails.map((item, index) => (
                <div
                    className={`product-row ${index % 2 === 0 ? "normal" : "reverse"}`}
                    key={index}
                >
                    {/* Image */}
                    <div className="product-image">
                        <img src={item.img} alt={item.name} />
                    </div>

                    {/* Text */}
                    <div className="product-info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>

                        <ul>
                            {item.features.map((f, i) => (
                                <li key={i}>✔ {f}</li>
                            ))}
                        </ul>

                        <button>Buy Now</button>
                    </div>
                </div>
            ))}
        </section>
    );
}