import "./ProductPage.css";
import Products from "../../Products/Products";
import Filters from "./Filters/Filters";


const App = () => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Filters />
      <Products />
    </div>
  );
};

export default App;
