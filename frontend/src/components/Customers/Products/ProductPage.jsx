import { useState } from "react";
import { FaFilter, FaRegHeart, FaShoppingCart } from "react-icons/fa";

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

const products = [
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 1999,
    discount: "30% Off",
    brand: "Adidas",
    imageSrc: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 2999,
    discount: "50% Off",
    brand: "Puma",
    imageSrc: "https://via.placeholder.com/300",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://m.media-amazon.com/images/I/91dKFxVIZjL._AC_UY1100_.jpg",
  },

];

const ProductPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [price, setPrice] = useState(2000);
  const [showFilters, setShowFilters] = useState(false);
  const minPrice = 500;
  const maxPrice = 5000;

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen p-4 py-24">
      {/* Sidebar */}
      <aside className={`w-full lg:w-1/4 p-4 transition-all ${showFilters ? 'block' : 'hidden lg:block'}`}>
        <h2 className="text-xl font-bold mb-4 text-black-600">Filters</h2>
        {Object.keys(filters).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="font-semibold text-gray-700">{category}</h3>
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
        <h2 className="text-2xl font-bold text-black-600 mb-4">All Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white  shadow-md border transform transition-all duration-300 hover:scale-105 relative group overflow-hidden">
              <div className="w-full h-50 overflow-hidden">
                <img src={product.imageSrc} alt={product.name} className="w-full h-48 object-cover object-top" style={{ objectPosition: 'top' }} />
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
                <h3 className="font-bold text-md text-gray-900">{product.name}</h3>
                <p className="text-gray-700 text-sm mt-1">Brand: {product.brand}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-gray-900 font-semibold text-md">₹{product.price}</p>
                  <p className="text-gray-500 line-through text-xs">₹{(product.price * 1.2).toFixed(0)}</p>
                  <p className="text-green-600 font-semibold text-xs">{product.discount}</p>
                </div>
                <p className="text-green-600 font-semibold text-xs">Save ₹{(product.price * 0.2).toFixed(0)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
