import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Customers/Footer/Footer";
import Navbar from "./components/Customers/Navigation/Navigation";
import ProductPage from "./components/Customers/Products/ProductPage";
import HomePage from "./pages/Homepage/Homepage";
import Register from "./Pages/register";
import Login from "./Pages/login";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminRegister from "./Pages/AdminRegister";
import Additems from "./Pages/Admin/AddItems";
import Categories from "./Pages/Admin/Categories";
import ListItems from "./Pages/Admin/ListItems";
import Orders from "./Pages/Admin/Orders";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/additem" element={<Additems />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/listitem" element={<ListItems />} />
        <Route path="/order" element={<Orders />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
