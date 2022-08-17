import OfferBar from "./components/OfferBar/OfferBar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import HomePage from "./components/Pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <OfferBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-products" element={<ProductPage />} />
      </Routes>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
