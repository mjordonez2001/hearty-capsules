import { Link } from "react-router-dom";
import { SlBag, SlUser } from "react-icons/sl";

function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-light sticky-top px-5">
      <div className="container-fluid">
        <div className="d-flex col-4">
          <Link className="nav-link mx-3" to="/shop">
            Shop
          </Link>
          <Link className="nav-link mx-3" to="/quiz">
            Quiz
          </Link>
          <Link className="nav-link mx-3" to="/contact">
            Contact
          </Link>
        </div>

        <div className="col-4 d-flex justify-content-center">
          <Link className="navbar-brand mb-0 h1 fs-3" to="/">
            Hearty Capsules
          </Link>
        </div>

        <div className="d-flex fs-5 col-4 justify-content-end">
          <Link className="nav-link mx-3" to="/account">
            <SlUser />
          </Link>
          <Link className="nav-link mx-3" to="/cart">
            <SlBag />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
