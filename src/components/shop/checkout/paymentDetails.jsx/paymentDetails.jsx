import React from "react";
import ProductItem from "./ProductItem";
import PaymentMethod from "./paymentMethod";

const PaymentDetails = ({ cart, cartTotal }) => {
  return (
    <div className="paymentDetails-Container">
      <h2 className="mb-4">Products</h2>
      {cart ? cart?.map((product) => <ProductItem product={product} />) : ""}
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0">Subtotal</p>
        <span className="m-0 fw-semibold">${cartTotal}</span>
      </div>
      <hr />
      <div className="shipping-pre d-flex justify-content-between align-items-center">
        <p className="m-0">Shipping</p>
        <div>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              name="shipping-Preferences"
              id="shipping-Preferences"
              checked
            />
            <label htmlFor="shipping-Preferences">Free shipping</label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              name="shipping-Preferences"
              id="shipping-Preferences"
            />
            <label htmlFor="shipping-Preferences">Flat rate</label>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p>Total</p>
        <span className="fw-semibold">${cartTotal}</span>
      </div>
      <PaymentMethod />
      <div className="w-100">
        <input
          type="submit"
          value="place order"
          className="w-100 place-order-btn"
        />
      </div>
    </div>
  );
};

export default PaymentDetails;
