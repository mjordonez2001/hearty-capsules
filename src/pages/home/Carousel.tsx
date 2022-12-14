import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
            className="d-block w-100"
            alt="Wellness journey image"
          />
          <div className="carousel-caption d-none d-md-block">
            <h4>Your wellness journey starts here</h4>
            <Link to="/shop" className="btn btn-primary my-2">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="8000">
          <img
            src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"
            className="d-block w-100"
            alt="Quiz image"
          />
          <div className="carousel-caption d-none d-md-block">
            <h4>Not sure what to get?</h4>
            <div>Take our interactive quiz for a recommendation</div>
            <Link to="/quiz" className="btn btn-primary my-2">
              Take Quiz
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
