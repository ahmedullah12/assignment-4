import Advertisement from "./Advertisement";
import Banner from "./Banner";
import PopularBrands from "./PopularBrands";
import Products from "./Products";

const Home = () => {
  // base url - https://assignment-4-server.vercel.app/
  return (
    <div className="">
      <Banner/>
      <Advertisement/>
      <Products/>
      <PopularBrands/>
    </div>
  );
};

export default Home;