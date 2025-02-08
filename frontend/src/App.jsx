import Footer from "./components/Customers/Footer/Footer";
import Navigation from "./components/Customers/Navigation/Navigation";
import ProductPage from "./components/Customers/Products/ProductPage";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <div>
        <ProductPage />
        {/* <Homepage /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
