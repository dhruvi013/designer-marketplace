import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaList, FaShoppingBag, FaSignOutAlt, FaRegHeart, FaShoppingCart, FaEdit, FaTrash
} from 'react-icons/fa';
import axios from 'axios';

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({ name: '', brand: '', price: '' });

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setEditedProduct({
      name: product.name,
      brand: product.brand,
      price: product.price
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, editedProduct);
      setProducts(products.map(product =>
        product.id === id ? { ...product, ...editedProduct } : product
      ));
      setEditProductId(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <div className="flex items-center mb-10">
          <img src="https://i.ibb.co/6st3HXP/adaa-jaipur-logo.png" alt="Logo" className="h-14 mx-auto" />
        </div>
        <nav className="space-y-4">
          <Link to="/admindashboard" className="w-full text-left flex items-center space-x-2"><FaList /> <span>Dashboard</span></Link>
          <Link to="/additem" className="w-full text-left flex items-center space-x-2"><FaList /> <span>Add Items</span></Link>
          <Link to="/listitem" className="w-full text-left flex items-center space-x-2"><FaList /> <span>List Items</span></Link>
          <Link to="/order" className="w-full text-left flex items-center space-x-2 text-pink-600 font-semibold"><FaShoppingBag /> <span>Orders</span></Link>
          <Link to="/categories" className="w-full text-left flex items-center space-x-2"><FaList /> <span>Categories</span></Link>
          <Link to="/shop-the-look" className="w-full text-left flex items-center space-x-2"><FaList /> <span>Shop The Look</span></Link>
        </nav>
      </div>

      {/* Product Cards */}
      <div className="w-4/5 p-8 bg-gray-50 mt-20">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const images = JSON.parse(product.images || "[]");
            const isEditing = editProductId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white shadow-md border rounded overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 relative group"
              >
                <div className="w-full h-48 overflow-hidden">
                  {images.length > 0 && (
                    <img
                      src={`http://localhost:5000${images[0]}`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button className="bg-white p-2 rounded-full shadow-md" onClick={() => handleEditClick(product)}>
                    <FaEdit className="text-blue-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md" onClick={() => handleDelete(product.id)}>
                    <FaTrash className="text-red-600" />
                  </button>
                </div>

                <div className="p-3">
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        name="name"
                        value={editedProduct.name}
                        onChange={handleEditChange}
                        className="border w-full p-1 rounded"
                        placeholder="Product Name"
                      />
                      <input
                        name="brand"
                        value={editedProduct.brand}
                        onChange={handleEditChange}
                        className="border w-full p-1 rounded"
                        placeholder="Brand"
                      />
                      <input
                        name="price"
                        value={editedProduct.price}
                        onChange={handleEditChange}
                        className="border w-full p-1 rounded"
                        placeholder="Price"
                      />
                      <button
                        onClick={() => handleEditSubmit(product.id)}
                        className="bg-green-600 text-white px-2 py-1 rounded text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditProductId(null)}
                        className="text-gray-500 text-sm ml-2"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-bold text-md text-gray-900">{product.name}</h3>
                      <p className="text-gray-700 text-sm mt-1">Brand: {product.brand}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <p className="text-gray-900 font-semibold text-md">₹{product.price}</p>
                        <p className="text-gray-500 line-through text-xs">₹{(product.price * 1.2).toFixed(0)}</p>
                        <p className="text-green-600 font-semibold text-xs">{product.discount}</p>
                      </div>
                      <p className="text-green-600 font-semibold text-xs">
                        Save ₹{(product.price * 0.2).toFixed(0)}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListItems;
