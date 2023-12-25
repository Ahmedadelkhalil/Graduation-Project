import React from "react";
import LogiIn from "./loginBtn";
import Search from "./searchBtn";
import Wishlist from "./wishlistBtn";

import shopImg from "../../assets/icons/storefront-icon.svg";

import { NavLink } from "react-router-dom";

const BottomNav = ({ isLogged, wishlist }) => {
  return (
    <ul className="b-n-b-s row position-fixed bottom-0 start-0 w-100 py-3 px-4 bg-white list-unstyled m-0">
      <li className="nav-item col-3 text-center">
        <NavLink to="/shop" className="nav-link" aria-label="Go For Shopping">
          <img src={shopImg} alt="shop-icon" />
        </NavLink>
      </li>
      <li className="nav-item col-3 text-center">
        <NavLink to="/" className="nav-link">
          <LogiIn isLogged={isLogged} />
        </NavLink>
      </li>
      <li className="nav-item col-3 text-center">
        <NavLink to="/" className="nav-link">
          <Search />
        </NavLink>
      </li>
      <li className="nav-item col-3 text-center">
        <NavLink to="/" className="nav-link">
          <Wishlist wishlist={wishlist} />
        </NavLink>
      </li>
    </ul>
  );
};

export default BottomNav;
