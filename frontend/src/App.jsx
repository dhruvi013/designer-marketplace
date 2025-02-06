import Footer from "./components/Customers/Footer/Footer";
import Navigation from "./components/Customers/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
