import { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Importing a filter icon from react-icons

const filters = {
  brand: ["Nike", "Adidas", "Puma", "Reebok"],
  gender: ["Men", "Women", "Unisex"],
  discount: ["10%", "20%", "30%", "50%+"],
  size: ["XS","S", "M", "L", "XL", "XXL","XXXL"],
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
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 1,
    name: "Casual Shirt",
    price: 999,
    discount: "20% Off",
    brand: "Nike",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },

  {
    id: 2,
    name: "Running Shoes",
    price: 1999,
    discount: "30% Off",
    brand: "Adidas",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 2999,
    discount: "50% Off",
    brand: "Puma",
    imageSrc: "https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_1280.jpg",
  },
];

const ProductPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [price, setPrice] = useState(2000);
  const [showFilters, setShowFilters] = useState(false);
  const minPrice = 500;
  const maxPrice = 5000;

  const handleFilterChange = (category, value, checked) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (checked) {
        newFilters[category] = newFilters[category] ? [...newFilters[category], value] : [value];
      } else {
        newFilters[category] = newFilters[category]?.filter((item) => item !== value) || [];
      }
      return newFilters;
    });
  };

  return (
    <div className="flex flex-col lg:flex-row bg-blue-50 min-h-screen p-4">
      {/* Sidebar */}
      <aside className={`w-full lg:w-1/4 p-4  transition-all ${showFilters ? 'block' : 'hidden lg:block'}`}>
        <h2 className="text-xl font-bold mb-4 text-blue-600">Filters</h2>

        {Object.keys(filters).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="font-semibold text-gray-700">{category}</h3>
            {filters[category].map((option) => (
              <label key={option} className="flex items-center space-x-2 mt-1">
                <input
                  type="checkbox"
                  onChange={(e) => handleFilterChange(category, option, e.target.checked)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        ))}

        {/* Price Slider */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">Price: ₹{price}</h3>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>Min: ₹{minPrice}</span>
            <span>Max: ₹{maxPrice}</span>
          </div>
        </div>
      </aside>

      {/* Mobile Filter Icon */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <button
          className="text-blue-600 p-2 border rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter />
          <span className="ml-2">Filters</span>
        </button>
      </div>

      {/* Product List */}
      <section className="w-full lg:w-3/4 p-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <img src={product.imageSrc} alt={product.name} className="mb-2 w-full" />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-700">₹{product.price}</p>
              <p className="text-red-500 font-semibold">{product.discount}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
