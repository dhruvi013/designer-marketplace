import React, { useState } from 'react';
import { FaList, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('INDIAN WEAR');
  const [subCategory, setSubCategory] = useState('KURTAS');
  const [productPrice, setProductPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [ecoFriendly, setEcoFriendly] = useState(false);

  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleImageChange = (e) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setImages(fileList);
    }
  };

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productName,
      productDescription,
      productCategory,
      subCategory,
      productPrice,
      discountPercentage,
      selectedSizes,
      bestseller,
      ecoFriendly,
      images,
      video,
    };
    console.log('Product Added:', formData);
    // API request logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <div className="flex items-center mb-10">
          <img src="https://i.ibb.co/6st3HXP/adaa-jaipur-logo.png" alt="Logo" className="h-14 mx-auto" />
        </div>
        <nav className="space-y-4">
  <Link to="/admindashboard" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>Dashboard</span>
  </Link>
  
  <Link to="/additem" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>Add Items</span>
  </Link>
  
  <Link to="/listitem" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>List Items</span>
  </Link>
  
  <Link to="/order" className="w-full text-left flex items-center space-x-2  text-pink-600 font-semibold">
    <FaShoppingBag /> <span>Orders</span>
  </Link>
  
  <Link to="/categories" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>Categories</span>
  </Link>
  
  <Link to="/shop-the-look" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>Shop The Look</span>
  </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 mt-20">
        {/* Logout Button */}
        <div className="flex justify-end">
          <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>

        {/* Page Content */}
        <h1 className="text-2xl font-semibold mb-6">Add New Item</h1>

        {/* Upload Images */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-3">Upload Images</label>
          <div className="flex gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="relative border-2 border-dashed border-gray-300 rounded-lg w-24 h-24 flex items-center justify-center hover:border-blue-400 transition"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  id={`image-upload-${index}`}
                />
                <label
                  htmlFor={`image-upload-${index}`}
                  className="flex flex-col items-center justify-center text-gray-400 hover:text-blue-400 transition cursor-pointer"
                >
                  {/* Cloud Upload Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A5 5 0 0012 4a5 5 0 00-4.9 4H7a5 5 0 000 10h8a4 4 0 001.88-8.9zM11 13v3H9v-3H7l3-3 3 3h-2z" />
                  </svg>
                  <span className="text-xs font-medium">Upload</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Video */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-3">Upload Product Video (Optional)</label>
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg w-48 h-32 flex items-center justify-center hover:border-blue-400 transition">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="flex flex-col items-center justify-center text-gray-400 hover:text-blue-400 transition cursor-pointer"
            >
              {/* Cloud Upload Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.88 9.1A5 5 0 0012 4a5 5 0 00-4.9 4H7a5 5 0 000 10h8a4 4 0 001.88-8.9zM11 13v3H9v-3H7l3-3 3 3h-2z" />
              </svg>
              <span className="text-sm font-medium">Upload Video</span>
            </label>
          </div>
        </div>

        {/* Product Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-2 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="mt-2 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* Category and Subcategory */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Product Category</label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="mt-2 p-2 border rounded-md w-full"
              >
                <option>INDIAN WEAR</option>
                <option>WESTERN WEAR</option>
                <option>ACCESSORIES</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Sub Category</label>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="mt-2 p-2 border rounded-md w-full"
              >
                <option>KURTAS</option>
                <option>TOPS</option>
                <option>DRESSES</option>
              </select>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Product Price</label>
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="mt-2 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Discount Percentage</label>
              <input
                type="number"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                className="mt-2 p-2 border rounded-md w-full"
                placeholder="0-100"
              />
            </div>
          </div>

          {/* Product Sizes */}
          <div>
            <label className="block text-sm font-medium mb-2">Product Sizes</label>
            <div className="flex gap-2">
              {sizeOptions.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`border rounded-md px-3 py-1 ${
                    selectedSizes.includes(size) ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={bestseller}
                onChange={(e) => setBestseller(e.target.checked)}
                className="mr-2"
              />
              Bestseller
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={ecoFriendly}
                onChange={(e) => setEcoFriendly(e.target.checked)}
                className="mr-2"
              />
              Eco-Friendly
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-md">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orders;
