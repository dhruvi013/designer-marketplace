import React from "react";
import "./ProductCard.css"; // Import external CSS file

const ProductCard = () => {
  return (
    <div className="product-card">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="https://cdn.pixabay.com/photo/2023/10/24/02/01/women-8337216_1280.jpg"
          alt="Product"
        />
      </div>

      {/* Text Content */}
      <div className="text-content">
        <p className="brand">Universaloutfit</p>
        <p className="product-name">Casual Sleeve Puff Solid Women Pink Top</p>

        {/* Pricing Section */}
        <div className="pricing">
          <p className="price">$199</p>
          <p className="old-price">$1999</p>
          <p className="discount">70% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
