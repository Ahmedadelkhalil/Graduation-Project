import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ showNav, hideNav, isLgScreen }) => {
  return (
    <nav className={`${showNav ? "show" : ""}`}>
      {!isLgScreen ? (
        <button
          type="button"
          className="btn rounded-0 mb-0 w-100 d-flex justify-content-end align-items-center border-0 py-3 px-4 gap-2 bg-black text-white"
          onClick={hideNav}
        >
          <span>Close</span>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      ) : (
        ""
      )}
      <ul
        className="list-unstyled m-0 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 text-uppercase py-lg-3 letter-space-2"
        id="navbarTogglerMenu"
      >
        <li className="nav-item">
          <NavLink to="/" onClick={hideNav} className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/shop"
            onClick={hideNav}
            className="nav-link"
            state={{ from: "All" }}
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" onClick={hideNav} className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" onClick={hideNav} className="nav-link">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq" onClick={hideNav} className="nav-link">
            Faq
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
