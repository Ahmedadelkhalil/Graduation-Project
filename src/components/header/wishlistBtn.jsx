import React from "react";
import heartIcon from "../../assets/icons/heart-icon.svg";
import { NavLink } from "react-router-dom";

const Wishlist = ({ wishlist }) => {
  return (
    <NavLink className="position-relative" to="/shop/wishlist">
      <img src={heartIcon} alt="wishlist-icon" />
      <span className="position-absolute top-0 end-0 badge rounded-pill bg-dark text-white amount-badge">
        {wishlist ? (wishlist.length > 99 ? "99+" : wishlist.length) : 0}
        <p className="visually-hidden">wishlist items show here</p>
      </span>
    </NavLink>
  );
};

export default Wishlist;
