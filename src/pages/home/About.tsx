function About() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
      <h4>About Us</h4>
      <div className="d-flex flex-column m-3">
        <div className="d-flex justify-content-evenly">
          <div className="col-4">
            <h5>Mission</h5>
            <p>
              Founded in the values of wellness, transparency, and quality,
              Hearty Capsules provides a curated selection of supplements to
              meet individual needs.
            </p>
          </div>
          <div className="col-4">
            <h5>Ingredients</h5>
            <p>
              We promise to only use the most effective, research-backed, and
              high-quality ingredients in each of our products. No synthetic
              colorants or additives. We make sure that what you put in your
              body is only the good stuff.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-evenly mt-4">
          <div className="col-4">
            <h5>Sustainability</h5>
            <p>
              We care about the environmental impact of our products and its
              packaging. We are a carbon neutral company and make an effort to
              offset any CO2 emissions.
            </p>
          </div>
          <div className="col-4">
            <h5>Shipping</h5>
            <p>We keep it easy. Free shipping, always.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
