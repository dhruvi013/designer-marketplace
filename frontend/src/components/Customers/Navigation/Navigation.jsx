import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import "@fontsource/poppins";
import "@fontsource/montserrat";
import "@fontsource/lobster";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-6 px-12">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-[#427f9b] tracking-wide" style={{ fontFamily: "Lobster, cursive" }}>
          VastraVibe
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-12 text-[16.5px] font-semibold">
          <li>
            <Link to="/" className="text-black cursor-pointer hover:text-[#427f9b]">HOME</Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-600 hover:text-[#427f9b] cursor-pointer">COLLECTION</Link>
          </li>
          <li>
            <Link to="/blogpage" className="text-gray-600 hover:text-[#427f9b] cursor-pointer">BLOG</Link>
          </li>
          <li>
            <Link to="/events" className="text-gray-600 hover:text-[#427f9b] cursor-pointer">EVENTS</Link>
          </li>
        </ul>

        {/* Icons with Navigation */}
        <div className="flex items-center space-x-6">
          <Link to="/search">
            <FaSearch className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
          </Link>
          <Link to="/login">
            <FaUser className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
          </Link>
          <div className="relative">
            <Link to="/cart">
              <FaShoppingBag className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
              <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-2">0</span>
            </Link>
          </div>
          <div className="relative">
            <Link to="/wishlist">
              <FaHeart className="text-gray-600 text-xl cursor-pointer hover:text-[#42839b]" />
              <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-2">0</span>
            </Link>
          </div>
          <Link to="/AdminRegister">
            <span className="font-bold text-lg cursor-pointer hover:text-[#42839b]">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
