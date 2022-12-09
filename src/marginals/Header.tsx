import { NavLink } from "react-router-dom";
import { SlBag, SlUser } from "react-icons/sl";
import { getCart } from "../utils/routes";
import { useQuery } from "@tanstack/react-query";
import { countItems } from "../utils/format";

function Header() {
  const query = useQuery(["cart"], async () => await getCart());

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
          <NavLink className="nav-link mx-3 position-relative" to="/cart">
            <SlBag />

            {query.data && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "10px", marginTop: "6px" }}
              >
                {countItems(query.data.data)}
                <span className="visually-hidden">products</span>
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
