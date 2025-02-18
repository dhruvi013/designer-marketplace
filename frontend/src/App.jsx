import Footer from "./components/Customers/Footer/Footer";
import Navbar from "./components/Customers/Navigation/Navigation";
import ProductPage from "./components/Customers/Products/ProductPage";
import HomePage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <ProductPage />
        {/* <HomePage /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
