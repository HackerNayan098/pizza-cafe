import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/navbar.scss";
import { navopen, navclose, cart } from "../utils/icons";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">FoodWay </Link>
      </div>

      <div className="cart-icon-wrapper">
        <div className={`nav-list ${active ? "nav-list-active" : ""}`}>
          <li
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={() => setActive(!active)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={location.pathname === "/menu" ? "active-link" : ""}
            onClick={() => setActive(!active)}
          >
            <Link to="/menu">Menu </Link>
          </li>
          <li
            className={location.pathname === "/about" ? "active-link" : ""}
            onClick={() => setActive(!active)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={location.pathname === "/contact" ? "active-link" : ""}
            onClick={() => setActive(!active)}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="cart-icon">
          <span>
            <Link to="/cart">{cart}</Link>
          </span>
        </div>
        <div className="nav-icon" onClick={() => setActive(!active)}>
          <span>{active ? navclose : navopen}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
