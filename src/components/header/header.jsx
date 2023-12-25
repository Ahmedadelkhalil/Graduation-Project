import React, { useState } from "react";

import Navbar from "./navbar";
import Search from "./searchBtn";
import Login from "./loginBtn";
import Wishlist from "./wishlistBtn";
import ShopingCart from "./cartShoppingBtn";
import BottonNav from "./bottomNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Header = ({ isLogged, wishlist, cart, isLgScreen }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="main-header">
      <div className="content-holder container-fluid px-0">
        <div className="row align-items-center px-3 mb-lg-4">
          <div className="col-4">
            {!isLgScreen ? (
              <button
                type="button"
                aria-label="showSideNav"
                onClick={() => setShowNav(true)}
                className="btn border-0 p-0 fs-5"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            ) : (
              <Search />
            )}
          </div>
          <div className="col-4 text-center d-flex justify-content-center align-items-center">
            <NavLink className="" to="/">
              <h1 className="m-0 name">
                <span className="f-name">ahmed</span>{" "}
                <span className="s-name">adel</span>
              </h1>
            </NavLink>
          </div>
          {isLgScreen ? (
            <div className="col-4 d-flex gap-4 align-items-center justify-content-end text-end">
              <Login isLogged={isLogged} />
              <Wishlist wishlist={wishlist} />
              <ShopingCart cart={cart} />
            </div>
          ) : (
            <div className="col-4 d-felx justify-content-end text-end">
              <ShopingCart cart={cart} />
            </div>
          )}
        </div>

        <Navbar
          showNav={showNav}
          isLgScreen={isLgScreen}
          hideNav={() => setShowNav(false)}
        />
        {!isLgScreen ? (
          <BottonNav isLogged={isLogged} wishlist={wishlist} />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
