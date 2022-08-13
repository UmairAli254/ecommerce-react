import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import OfferBar from "./components/OfferBar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <OfferBar />
      <Navbar />
    </div>
  );
};

export default App;
