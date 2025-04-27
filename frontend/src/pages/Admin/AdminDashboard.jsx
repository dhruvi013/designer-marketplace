import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { FaRupeeSign, FaShoppingBag, FaList, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const data = [
  { name: 'Cancelled', orders: 14 },
  { name: 'Order Placed', orders: 60 },
  { name: 'Shipped', orders: 8 },
  { name: 'Delivered', orders: 43 },
  { name: 'Processing', orders: 5 },
];

const recentOrders = [
  { name: 'fgh rty', date: '27/4/2025', amount: 34555 },
  { name: 'Suraj Yaligar', date: '7/4/2025', amount: 10570 },
  { name: 'Suraj Yaligar', date: '21/3/2025', amount: 2803 },
  { name: 'Suraj Yaligar', date: '18/3/2025', amount: 28 },
  { name: 'mhnj l', date: '17/2/2025', amount: 498 },
];

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <div className="flex items-center mb-10">
          <img src="https://i.ibb.co/6st3HXP/adaa-jaipur-logo.png" alt="Logo" className="h-14 mx-auto" />
        </div>
        <nav className="space-y-4">
  <Link to="/admindashboard" className="w-full text-left flex items-center space-x-2 text-pink-600 font-semibold">
    <FaList /> <span>Dashboard</span>
  </Link>
  
  <Link to="/additem" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>Add Items</span>
  </Link>
  
  <Link to="/list-items" className="w-full text-left flex items-center space-x-2">
    <FaList /> <span>List Items</span>
  </Link>
  
  <Link to="/orders" className="w-full text-left flex items-center space-x-2">
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

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-500"><FaRupeeSign size={24} /></div>
            <h4 className="text-lg font-semibold mt-4">Total Revenue</h4>
            <p className="text-2xl font-bold mt-2">₹1,31,923</p>
            <p className="text-green-500 mt-1">↑ 395.4%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-500"><FaShoppingBag size={24} /></div>
            <h4 className="text-lg font-semibold mt-4">Delivered Orders</h4>
            <p className="text-2xl font-bold mt-2">32.3%</p>
            <p className="text-gray-500 mt-1">43 of 133</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-purple-500"><FaShoppingBag size={24} /></div>
            <h4 className="text-lg font-semibold mt-4">Total Orders</h4>
            <p className="text-2xl font-bold mt-2">133</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-yellow-500"><FaShoppingBag size={24} /></div>
            <h4 className="text-lg font-semibold mt-4">Avg Order Value</h4>
            <p className="text-2xl font-bold mt-2">₹991.90</p>
          </div>
        </div>

        {/* Graph and Recent Orders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-4">Orders by Status</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-4">Recent Orders</h4>
            <ul className="space-y-4">
              {recentOrders.map((order, index) => (
                <li key={index} className="flex justify-between">
                  <div>
                    <p className="font-medium">{order.name}</p>
                    <p className="text-gray-400 text-sm">{order.date}</p>
                  </div>
                  <p className="font-semibold">₹{order.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
