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

  const handleImageChange = (e, index) => {
    const updatedImages = [...images];
    updatedImages[index] = e.target.files[0];
    setImages(updatedImages);
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

    selectedSizes.forEach((size) => formData.append('selectedSizes[]', size));
    images.forEach((image) => formData.append('images', image));
    if (video) formData.append('video', video);

    try {
      const res = await fetch('http://localhost:5000/api/products/add-product', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Product added successfully!');
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
      <ToastContainer />
      <div className="w-64 bg-white shadow-lg p-5">
        <div className="flex items-center mb-10">
          <img src="https://i.ibb.co/6st3HXP/adaa-jaipur-logo.png" alt="Logo" className="h-14 mx-auto" />
        </div>
        <nav className="space-y-4">
          <Link to="/admindashboard" className="flex items-center gap-2"><FaList /> Dashboard</Link>
          <Link to="/additem" className="flex items-center gap-2 text-pink-600 font-semibold"><FaList /> Add Items</Link>
          <Link to="/listitem" className="flex items-center gap-2"><FaList /> List Items</Link>
          <Link to="/order" className="flex items-center gap-2"><FaShoppingBag /> Orders</Link>
          <Link to="/categories" className="flex items-center gap-2"><FaList /> Categories</Link>
          <Link to="/shop-the-look" className="flex items-center gap-2"><FaList /> Shop The Look</Link>
        </nav>
      </div>

      <div className="flex-1 p-8 mt-20">
        <div className="flex justify-end mb-6">
          <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>

        <h1 className="text-2xl font-semibold mb-6">Add New Item</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Upload Images</label>
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, index)}
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />
            ))}
            {images.length > 0 && (
              <div className="flex flex-wrap mt-2 gap-4">
                {images.map((img, index) => (
                  img && (
                    <img
                      key={index}
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${index}`}
                      className="w-24 h-24 object-cover rounded-md border"
                    />
                  )
                ))}
              </div>
            )}
          </div>

          {/* Video Upload */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Upload Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {video && (
              <video controls className="mt-2 w-64 rounded-md border">
                <source src={URL.createObjectURL(video)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-3">Select Available Sizes</label>
            <div className="flex gap-4">
              {sizeOptions.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`px-4 py-2 border rounded-lg ${selectedSizes.includes(size) ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Product Fields */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-lg font-semibold mb-2">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Price</label>
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Category</label>
              <input
                type="text"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Subcategory</label>
              <input
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Discount (%)</label>
              <input
                type="number"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-lg font-semibold mb-2">Description</label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>
            <div className="col-span-2 flex gap-6 mt-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={bestseller}
                  onChange={() => setBestseller(!bestseller)}
                />
                Bestseller
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={ecoFriendly}
                  onChange={() => setEcoFriendly(!ecoFriendly)}
                />
                Eco-Friendly
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
