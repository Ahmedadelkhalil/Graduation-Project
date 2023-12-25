import React, { useRef, useEffect } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartModalProduct from "./cartModalProduct";

import { NavLink, useLocation } from "react-router-dom";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const CartModal = ({ cart, cartTotal, removeFromCart }) => {
  const parent = useRef();

  const closeModel = () => {
    parent.current.click();
  };
  const { pathname } = useLocation();

  const [parentDiv] = useAutoAnimate();

  useEffect(() => {
    closeModel();
  }, [pathname]);

  return (
    <div className="cart-modal-container">
      <div
        className="modal fade"
        id="shoppingCartModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="shoppingCartModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content border-0">
            <div className="modal-header border-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={parent}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="modal-body">
              <div className="cart-modal-products-holder" ref={parentDiv}>
                {cart.length > 0 ? (
                  cart.map((product, indx) => (
                    <div key={indx}>
                      <CartModalProduct
                        product={product}
                        removeFromCart={removeFromCart}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-capitalize fw-semibold mb-4">
                    Cart is empty
                  </p>
                )}
              </div>
              <div className="cartTotal-modal-products-holder">
                <span>Total:</span>
                <span>{`$${cartTotal.toFixed(2)}`}</span>
              </div>
              <div className="cart-modal-shipping-policy-user-inform">
                <p>
                  Buy{" "}
                  <span>{`$${
                    1000 - cartTotal <= 0 ? 0 : 1000 - cartTotal
                  }`}</span>{" "}
                  more to enjoy <span>FREE Shipping</span>
                </p>
              </div>
              <div className="cart-modal-btns-holder">
                <button type="button" onClick={() => closeModel()}>
                  <NavLink to="/shop/cart">view cart</NavLink>
                </button>
                <button type="button" onClick={() => closeModel()}>
                  <NavLink to="/shop/checkout">check out</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
