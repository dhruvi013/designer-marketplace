import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Customers/Footer/Footer";
import Navbar from "./components/Customers/Navigation/Navigation";
import ProductPage from "./components/Customers/Products/ProductPage";
import HomePage from "./pages/Homepage/Homepage";
import Register from "./Pages/register";
import Login from "./Pages/login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
