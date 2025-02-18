import { FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import "@fontsource/poppins";
import "@fontsource/montserrat";
import "@fontsource/lobster";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-7 px-12">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold text-[#427f9b] tracking-wide" style={{ fontFamily: "Lobster, cursive" }}>
          VastraVibe
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-12 text-[16.5px] font-semibold">
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
      </div>
    </nav>
  );
};

export default Navbar;
