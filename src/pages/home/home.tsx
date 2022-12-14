import About from "./About";
import Carousel from "./Carousel";
import FeaturedProducts from "./FeaturedProducts";

function Home() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <div className="col-6 m-3">
          <Carousel />
        </div>
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default Home;
