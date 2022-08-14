import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import OfferBar from "./components/OfferBar/OfferBar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-Section/Hero";

const App = () => {
  return (
    <div>
      <OfferBar />
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
