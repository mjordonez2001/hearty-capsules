import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/">
          Hearty Capsules
        </Link>
        <div className="d-flex">
          <Link className="nav-link mx-2" to="/quiz">
            Quiz
          </Link>
          <Link className="nav-link mx-2" to="/shop">
            Products
          </Link>
          <Link className="nav-link mx-2" to="/contact">
            Contact
          </Link>
          <Link className="nav-link mx-2" to="/account">
            Account
          </Link>
          <Link className="nav-link mx-2" to="/cart">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
