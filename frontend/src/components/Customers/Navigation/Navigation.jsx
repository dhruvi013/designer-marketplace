import { FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#427f9b] tracking-wide">VastraVibe</div>

      {/* Navigation Links */}
      <ul className="flex space-x-12 text-lg font-semibold">
        <li className="text-black cursor-pointer">HOME</li>
        <li className="text-gray-600 hover:text-black cursor-pointer">COLLECTION</li>
        <li className="text-gray-600 hover:text-black cursor-pointer">BLOG</li>
        <li className="text-gray-600 hover:text-black cursor-pointer">EVENTS</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <FaSearch className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
        <FaUser className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
        <div className="relative">
          <FaShoppingBag className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
          <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-2">0</span>
        </div>
        <div className="relative">
          <FaHeart className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
          <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-2">0</span>
        </div>
        <span className="font-bold text-lg cursor-pointer hover:text-[#42839b]">Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;
