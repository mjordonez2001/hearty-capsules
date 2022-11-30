import { NavLink } from "react-router-dom";
import { SlBag, SlUser } from "react-icons/sl";

function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-light sticky-top px-5">
      <div className="container-fluid">
        <div className="d-flex col-4">
          <NavLink className="nav-link mx-3" to="/shop">
            Shop
          </NavLink>
          <NavLink className="nav-link mx-3" to="/quiz">
            Quiz
          </NavLink>
          <NavLink className="nav-link mx-3" to="/contact">
            Contact
          </NavLink>
        </div>

        <div className="col-4 d-flex justify-content-center">
          <NavLink className="navbar-brand mb-0 h1 fs-3" to="/">
            Hearty Capsules
          </NavLink>
        </div>

        <div className="d-flex fs-5 col-4 justify-content-end">
          <NavLink className="nav-link mx-3" to="/account">
            <SlUser />
          </NavLink>
          <NavLink className="nav-link mx-3" to="/cart">
            <SlBag />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
