import { useEffect, useState } from "react";
import { FaFilter, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";

const filters = {
  brand: ["Nike", "Adidas", "Puma", "Reebok"],
  gender: ["Men", "Women", "Unisex"],
  discount: ["10%", "20%", "30%", "50%+"],
  size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  pattern: ["Solid", "Printed", "Striped", "Checked"],
  lengthType: ["Short", "Regular", "Long"],
  fabric: ["Cotton", "Polyester", "Linen", "Denim"],
  occasion: ["Casual", "Formal", "Party Wear"],
  color: ["Red", "Blue", "Black", "White"],
  ratings: ["4★ & above", "3★ & above", "2★ & above"],
  offers: ["Bank Offer", "Combo Offer", "No Cost EMI"],
};

const sortingOptions = ["Relevant", "Price Low to High", "Price High to Low"];

const ProductPage = () => {
  const [selectedSort, setSelectedSort] = useState("Relevant");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen p-4 py-24 relative">
      {/* Sidebar */}
      <aside
        className={`w-full lg:w-1/4 p-4 transition-all ${
          showFilters ? "block" : "hidden lg:block"
        }`}
      >
        <h2 className="text-xl font-bold mb-4 text-black-600">Filters</h2>
        {Object.keys(filters).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="font-semibold text-gray-700 capitalize">
              {category}
            </h3>
            {filters[category].map((option) => (
              <label key={option} className="flex items-center space-x-2 mt-1">
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        ))}
      </aside>

      {/* Product List */}
      <section className="w-full lg:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black-600">All Collections</h2>
          <div>
            <label htmlFor="sort" className="mr-2 font-semibold text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="border border-gray-300 rounded p-2 bg-white shadow-sm"
            >
              {sortingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => {
            const images = JSON.parse(product.images || "[]");
            return (
              <div
                key={product.id}
                onClick={() =>
                  setSelectedProduct({
                    ...product,
                    images,
                    mainImage: images[0] || null,
                  })
                }
                className="bg-white shadow-md border transform transition-all duration-300 hover:scale-105 relative group overflow-hidden cursor-pointer"
              >
                <div className="w-full h-50 overflow-hidden">
                  {images.length > 0 && (
                    <img
                      src={`http://localhost:5000${images[0]}`}
                      alt={product.name}
                      className="w-full h-48 object-cover object-top"
                    />
                  )}
                </div>
                <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <FaRegHeart className="text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <FaShoppingCart className="text-gray-600" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-md text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">
                    Brand: {product.brand}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-gray-900 font-semibold text-md">
                      ₹{product.price}
                    </p>
                    <p className="text-gray-500 line-through text-xs">
                      ₹{(product.price * 1.2).toFixed(0)}
                    </p>
                    <p className="text-green-600 font-semibold text-xs">
                      {product.discount}
                    </p>
                  </div>
                  <p className="text-green-600 font-semibold text-xs">
                    Save ₹{(product.price * 0.2).toFixed(0)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

{/* Modal */}
{selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl mx-4 max-h-[95vh] overflow-y-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-black"
        onClick={() => setSelectedProduct(null)}
      >
        ×
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnails and Video */}
        <div className="flex flex-col gap-2 items-center">
          {selectedProduct.images.map((img, idx) => (
            <img
              key={idx}
              src={`http://localhost:5000${img}`}
              alt={`thumb-${idx}`}
              className="w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition"
              onClick={() =>
                setSelectedProduct((prev) => ({
                  ...prev,
                  mainImage: img,
                }))
              }
            />
          ))}

          {/* Video Thumbnail */}
          {selectedProduct.video && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Product Video</h4>
              <video width="100%" controls className="mt-2 rounded">
                <source src={`http://localhost:5000${selectedProduct.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        {/* Main Image */}
        <div className="flex-1">
          <img
            src={`http://localhost:5000${selectedProduct.mainImage}`}
            alt="Main"
            className="w-full h-[400px] object-cover rounded"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>
          <p className="text-gray-700">ID: {selectedProduct.id}</p>
          <p className="text-gray-700">Brand: {selectedProduct.brand}</p>
          <p className="text-gray-700">Category: {selectedProduct.category}</p>
          <p className="text-green-700 font-semibold text-xl mt-2">
            ₹{selectedProduct.price}
          </p>
          <p className="text-gray-500 line-through">
            ₹{(selectedProduct.price * 1.2).toFixed(0)}
          </p>
          <p className="text-red-500 text-sm">{selectedProduct.discount} off</p>
          <p className="mt-3 text-gray-600">{selectedProduct.description}</p>
          <p className="mt-2 text-gray-600">
            Best Seller: {selectedProduct.bestseller ? "Yes" : "No"}
          </p>
          <p className="mt-2 text-gray-600">
            Eco-Friendly: {selectedProduct.ecoFriendly ? "Yes" : "No"}
          </p>

          {/* Sizes */}
          <p className="mt-2 text-gray-600">
            Sizes: {Array.isArray(selectedProduct.selectedSizes) ? selectedProduct.selectedSizes.join(', ') : "Not available"}
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Buy Now
            </button>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ProductPage;
