import Footer from "./components/Customers/Footer/Footer";
import Navbar from "./components/Customers/Navigation/Navigation";
import ProductPage from "./components/Customers/Products/ProductPage";
import HomePage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    // <div className="">
    //   <Navbar />
    //   <div>
    //     {/* <ProductPage /> */}
    //     <HomePage />
    //   </div>
    //   <Footer />
    // </div>

<AuthProvider>
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Router>
</AuthProvider>
  );
};

export default App;
