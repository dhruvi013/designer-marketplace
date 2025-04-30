import React, { useState } from 'react';
import { FaList, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('productCategory', productCategory);
    formData.append('subCategory', subCategory);
    formData.append('productPrice', productPrice);
    formData.append('discountPercentage', discountPercentage);
    formData.append('bestseller', bestseller);
    formData.append('ecoFriendly', ecoFriendly);
  
    selectedSizes.forEach((size) => formData.append('selectedSizes[]', size)); // array
  
    images.forEach((image) => {
      formData.append('images', image); // key must match `multer` config
    });
  
    if (video) {
      formData.append('video', video);
    }
  
    try {
      const res = await fetch('http://localhost:5000/api/products/add-product', {
        method: 'POST',
        body: formData,
      });
  
      const data = await res.json();
      
      if (res.ok) {
        toast.success('Product added successfully!', {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '4px',
            padding: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          },
          progressStyle: {
            background: '#22c55e'
          }
        });
        // Reset form
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setDiscountPercentage('');
        setImages([]);
        setVideo(null);
        setSelectedSizes([]);
        setBestseller(false);
        setEcoFriendly(false);
      } else {
        toast.error(data.message || 'Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error adding product. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <div className="flex items-center mb-10">
          <img src="https://i.ibb.co/6st3HXP/adaa-jaipur-logo.png" alt="Logo" className="h-14 mx-auto" />
        </div>
        <nav className="space-y-4">
          <Link to="/admindashboard" className="w-full text-left flex items-center space-x-2">
            <FaList /> <span>Dashboard</span>
          </Link>
          <Link to="/additem" className="w-full text-left flex items-center space-x-2 text-pink-600 font-semibold">
            <FaList /> <span>Add Items</span>
          </Link>
          <Link to="/listitem" className="w-full text-left flex items-center space-x-2">
            <FaList /> <span>List Items</span>
          </Link>
          <Link to="/order" className="w-full text-left flex items-center space-x-2">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.88 9.1A5 5 0 0012 4a5 5 0 00-4.9 4H7a5 5 0 000 10h8a4 4 0 001.88-8.9zM11 13v3H9v-3H7l3-3 3 3h-2z" />
              </svg>
              <span className="text-xs font-medium">Upload Video</span>
            </label>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-3">Select Available Sizes</label>
          <div className="flex gap-4">
            {sizeOptions.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`px-4 py-2 border rounded-lg ${
                  selectedSizes.includes(size)
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-lg font-semibold mb-3">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3">Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3">Product Price</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-3">Discount Percentage</label>
            <input
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Category & Subcategory */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-3">Product Category</label>
          <select
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          >
            <option value="INDIAN WEAR">Indian Wear</option>
            <option value="WESTERN WEAR">Western Wear</option>
            <option value="ACCESSORIES">Accessories</option>
          </select>
        </div>

        {/* Bestseller & Eco-Friendly Toggle */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Bestseller</label>
            <input
              type="checkbox"
              checked={bestseller}
              onChange={() => setBestseller(!bestseller)}
              className="toggle-checkbox"
            />
            <label className="text-lg font-semibold">Eco-Friendly</label>
            <input
              type="checkbox"
              checked={ecoFriendly}
              onChange={() => setEcoFriendly(!ecoFriendly)}
              className="toggle-checkbox"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddItem;
