import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const CartModalProduct = ({ product, removeFromCart }) => {
  return (
    <div className="cart-modal-product-container row mb-3 d-flex align-items-center">
      <div className="col-10 d-flex align-items-center">
        <NavLink
          className="cart-modal-pro-ls"
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList: product.inWishList } }}
        >
          <img src={product.imgs[0].src} alt={product.name} />
        </NavLink>
        <div className="cart-modal-pro-rs">
          <NavLink
            to={`/shop/${product.name.replaceAll(" ", "-")}`}
            state={{ from: { product, inWishList: product.inWishList } }}
            className="cart-modal-pro-name"
          >
            {product.name}
          </NavLink>
          <p className="cart-modal-pro-QTY">{`QTY: ${product.amount}`}</p>
          {product.discount ? (
            <p>
              <del className="cart-modal-pro-before-dis">{`$${product.price.toFixed(
                2
              )}`}</del>
              <span className="m-1"></span>
              <span className="cart-modal-pro-after-dis">{`$${(
                product.price - product.discount
              ).toFixed(2)}`}</span>
            </p>
          ) : (
            <p>
              <span>{`$${product.price.toFixed(2)}`}</span>
            </p>
          )}
        </div>
      </div>
      <div className="cart-modal-pro-rm col-2">
        <button onClick={() => removeFromCart(product.cartID)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default CartModalProduct;
