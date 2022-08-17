import Hero from "../Hero-Section/Hero";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products ShowBtn={true} />
    
    </div>
  );
};

export default Home;
