import React from "react";
import { NavLink } from "react-router-dom";

const CartTotals = ({ totalCost }) => {
  return (
    <div className="cartTotals-container my-5 my-lg-0">
      <p className="cartTotals-title m-0">Cart totals</p>
      <div className="cartTotals-details">
        <div className="row subTotal d-flex justify-content-between align-items-center mb-3">
          <p className="col-6">Subtotal</p>
          <p className="col-6 fw-semibold">{`$${totalCost.toFixed(2)}`}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center row mb-3">
          <p className="col-6">Shipping</p>
          <div className="shipping-info d-flex flex-column col-6">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                name="shipping-info"
                id="Free Shipping"
                checked
              />
              <label htmlFor="Free Shipping">Free shipping</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input type="radio" name="shipping-info" id="Flat rate" />
              <label htmlFor="Flat rate">Flat rate</label>
            </div>
            <p>Shipping options will be updated during checkout.</p>
          </div>
        </div>
        <div className="row subTotal d-flex justify-content-between align-items-center mb-3">
          <p className="col-6">Total</p>
          <p className="col-6 fw-semibold">{`$${totalCost.toFixed(2)}`}</p>
        </div>
        <div className="w-100">
          <NavLink to={`/shop/checkout`}>
            <button className="p-to-checkout w-100">proceed to checkout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
