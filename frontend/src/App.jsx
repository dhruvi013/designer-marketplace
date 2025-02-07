import Footer from "./components/Customers/Footer/Footer";
import Navigation from "./components/Customers/Navigation/Navigation";
import Product from "./components/Customers/Product/Product";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <Homepage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default App;
