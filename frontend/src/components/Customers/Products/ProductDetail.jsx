import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/full")
      .then((res) => {
        const enriched = res.data.map((product) => {
          const originalPrice =
            product.originalPrice ||
            Math.round(product.price / (1 - (product.discount || 0) / 100));
          return { ...product, originalPrice };
        });
        setProducts(enriched);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded shadow hover:shadow-md cursor-pointer transition"
          onClick={() =>
            setSelectedProduct({
              ...product,
              mainImage: product.images?.[0] || null,
            })
          }
        >
          <img
            src={`http://localhost:5000${product.images?.[0]}`}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t"
          />
          <div className="p-4">
            <h2 className="font-bold text-lg">{product.name}</h2>
            <div className="text-sm text-gray-600">{product.category}</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-700 font-semibold">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-red-500 text-sm">{product.discount}% off</span>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* MODAL UI BASED ON IMAGE */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl mx-4 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-black"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Thumbnail column */}
              <div className="flex flex-col gap-2 items-center">
                {selectedProduct.images?.map((img, idx) => (
                  <img
                    key={idx}
                    src={`http://localhost:5000${img}`}
                    alt={`thumb-${idx}`}
                    className="w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition"
                    onClick={() =>
                      setSelectedProduct((prev) => ({ ...prev, mainImage: img }))
                    }
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1">
                <img
                  src={`http://localhost:5000${selectedProduct.mainImage}`}
                  alt="Main"
                  className="w-full h-[400px] object-cover rounded"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h1>
                  <div className="flex items-center mt-2 gap-4">
                    <span className="text-xl text-green-700 font-semibold">
                      ₹{selectedProduct.price}
                    </span>
                    <span className="text-gray-500 line-through text-lg">
                      ₹{selectedProduct.originalPrice}
                    </span>
                    <span className="text-red-600 text-sm font-medium">
                      {selectedProduct.discount}% off
                    </span>
                  </div>

                  <div className="mt-3 text-gray-600">{selectedProduct.description}</div>

                  {/* Sizes */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Sizes:</p>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProduct.selectedSizes?.map((size, idx) => (
                        <span
                          key={idx}
                          className="border px-3 py-1 rounded text-sm bg-gray-100"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex gap-2">
                    {selectedProduct.bestseller && (
                      <span className="bg-yellow-300 text-xs px-2 py-1 rounded-full text-black">
                        Best Seller
                      </span>
                    )}
                    {selectedProduct.ecoFriendly && (
                      <span className="bg-green-200 text-xs px-2 py-1 rounded-full text-green-800">
                        Eco-Friendly
                      </span>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                    Buy Now
                  </button>
                  <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>

                {/* Video */}
                {selectedProduct.video && (
                  <video
                    width="100%"
                    height="auto"
                    controls
                    className="mt-6 rounded border"
                  >
                    <source
                      src={`http://localhost:5000${selectedProduct.video}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
