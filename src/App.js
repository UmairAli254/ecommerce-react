import OfferBar from "./components/OfferBar/OfferBar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import HomePage from "./components/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/Pages/SingleProduct/SingleProduct";
import CartPage from "./components/Pages/CartPage/CartPage";
import SingnUp from "./components/Pages/SignUp/SingnUp";
import Login from "./components/Pages/Login/Login";

const App = () => {
  return (
    <div>
      <OfferBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-products" element={<ProductPage />} />
        <Route path="/single-product" element={<SingleProduct />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<SingnUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
