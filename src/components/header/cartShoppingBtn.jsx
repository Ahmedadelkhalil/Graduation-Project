import React from "react";
import cartIcon from "../../assets/icons/cart-icon.svg";

const CartShopping = ({ cart }) => {
  return (
    <button
      className="btn position-relative border-0 p-0"
      data-bs-target="#shoppingCartModal"
      data-bs-toggle="modal"
      aria-label="shopping Cart"
    >
      <img src={cartIcon} alt="shoppingCart-Icon" />
      <span className="position-absolute top-0 end-0 bg-dark text-white badge amount-badge rounded-pill">
        {cart ? (cart.length > 99 ? "99+" : cart.length) : 0}
        <p className="visually-hidden">This is cart items</p>
      </span>
    </button>
  );
};

export default CartShopping;
