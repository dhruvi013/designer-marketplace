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

  // CART STATE
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Optional: Selected filters state (for future filtering functionality)
  const [selectedFilters, setSelectedFilters] = useState({});

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  // Add product to cart (if exists increase qty)
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        // Increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate total price in cart
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Optional: handle checkbox changes for filters
  const handleFilterChange = (category, option, checked) => {
    setSelectedFilters((prev) => {
      const prevCategory = prev[category] || [];
      if (checked) {
        return { ...prev, [category]: [...prevCategory, option] };
      } else {
        return { ...prev, [category]: prevCategory.filter((opt) => opt !== option) };
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen p-4 py-24 relative">
      {/* Sidebar */}
      <aside
        className={`w-full lg:w-1/4 p-4 transition-all ${
          showFilters ? "block" : "hidden lg:block"
        }`}
      >
        <h2 className="text-xl font-bold mb-4 text-black">Filters</h2>
        {Object.keys(filters).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="font-semibold text-gray-700 capitalize">{category}</h3>
            {filters[category].map((option) => (
              <label key={option} className="flex items-center space-x-2 mt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={
                    selectedFilters[category]
                      ? selectedFilters[category].includes(option)
                      : false
                  }
                  onChange={(e) => handleFilterChange(category, option, e.target.checked)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        ))}
      </aside>

      {/* Product List */}
      <section className="w-full lg:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">All Collections</h2>

          {/* Cart Icon + Badge */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative mr-4 p-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle Cart"
          >
            <FaShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full px-2 text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </button>

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
            let images = [];
            try {
              images = JSON.parse(product.images || "[]");
            } catch {
              images = [];
            }

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
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      // TODO: Handle wishlist or favorite here
                    }}
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    <FaRegHeart className="text-gray-600" />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FaShoppingCart className="text-gray-600" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-md text-gray-900">{product.name}</h3>
                  <p className="text-gray-700 text-sm mt-1">Brand: {product.brand}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-gray-900 font-semibold text-md">₹{product.price}</p>
                    <p className="text-gray-500 line-through text-xs">
                      ₹{(product.price * 1.2).toFixed(0)}
                    </p>
                    <p className="text-green-600 font-semibold text-xs">
                      {product.discount || ""}
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-auto"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-4xl w-full max-h-full p-6 overflow-auto"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="float-right text-black text-2xl font-bold hover:text-red-600"
              aria-label="Close product details"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-black">{selectedProduct.name}</h3>

            {/* Main image */}
            {selectedProduct.mainImage && (
              <img
                src={`http://localhost:5000${selectedProduct.mainImage}`}
                alt={selectedProduct.name}
                className="w-full max-h-96 object-contain mb-4"
              />
            )}

            {/* Thumbnails */}
            <div className="flex space-x-2 mb-6 overflow-x-auto">
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000${img}`}
                  alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                    selectedProduct.mainImage === img ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() =>
                    setSelectedProduct((prev) => ({ ...prev, mainImage: img }))
                  }
                />
              ))}
            </div>

            <p className="mb-2 text-gray-800">Brand: {selectedProduct.brand}</p>
            <p className="mb-2 text-gray-800">Category: {selectedProduct.category}</p>
            <p className="mb-2 text-gray-800">Color: {selectedProduct.color}</p>
            <p className="mb-2 text-gray-800">Description: {selectedProduct.description}</p>
            <div className="flex items-center space-x-4 mt-4">
              <p className="font-bold text-lg text-black">Price: ₹{selectedProduct.price}</p>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div
          className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-50 overflow-auto"
          aria-label="Shopping cart"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-black">Your Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              aria-label="Close cart"
              className="text-black font-bold text-2xl leading-none hover:text-red-600"
            >
              &times;
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-700">Your cart is empty.</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-300">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-gray-600 text-sm">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 font-bold"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-gray-300 pt-4">
                <p className="text-lg font-bold text-black">Total: ₹{cartTotal.toFixed(2)}</p>
                <button
                  className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                  onClick={() => alert("Checkout feature not implemented yet.")}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Filters toggle button for mobile */}
      <button
        onClick={() => setShowFilters((prev) => !prev)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg lg:hidden z-50"
        aria-label="Toggle filters"
      >
        <FaFilter size={20} />
      </button>
    </div>
  );
};

export default ProductPage;
