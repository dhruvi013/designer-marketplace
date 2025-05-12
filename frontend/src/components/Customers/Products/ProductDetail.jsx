import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import axios from 'axios';

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('/api/products/full') // updated route for full details
      .then(res => {
        const data = res.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Unexpected API response format:', data);
        }
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="gallery-container mt-20">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          product.images?.map((img, index) => (
            <div
              key={`${product.id}-${index}`}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={img} alt="product" className="product-thumbnail" />
            </div>
          ))
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={selectedProduct.images?.[0]}
              alt="product full"
              className="modal-image"
            />
            <div className="modal-details">
              <h3>{selectedProduct.name}</h3>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
              {selectedProduct.discount && (
                <p><strong>Discount:</strong> {selectedProduct.discount}%</p>
              )}
              <p><strong>Description:</strong> {selectedProduct.description}</p>
              <p><strong>Tags:</strong>
                {selectedProduct.bestseller && <span className="tag">Best Seller</span>}
                {selectedProduct.ecoFriendly && <span className="tag green">Eco-Friendly</span>}
              </p>
              <p><strong>Sizes:</strong> {selectedProduct.selectedSizes?.join(', ')}</p>

              {selectedProduct.video && (
                <video width="100%" height="auto" controls>
                  <source src={selectedProduct.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <button onClick={() => setSelectedProduct(null)} className="close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
