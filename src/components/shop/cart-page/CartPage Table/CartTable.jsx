import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { NavLink } from "react-router-dom";

const CartTable = ({ cart, removeFromCart, updateCartAmount }) => {
  return (
    <div className="cartTable-container">
      <table className="w-100">
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
        {cart.map((product, indx) => (
          <tr key={indx}>
            <td className="d-flex justify-content-start align-items-center">
              <NavLink
                to={`/shop/${product.name.replaceAll(" ", "-")}`}
                state={{ from: { product, inWishList: product.inWishList } }}
              >
                <img src={product.imgs[0].src} alt={product.name} />
              </NavLink>
              <NavLink
                to={`/shop/${product.name.replaceAll(" ", "-")}`}
                state={{ from: { product, inWishList: product.inWishList } }}
              >
                {product.name}
              </NavLink>
            </td>
            <td>
              {product.discount ? (
                <>{`$${(product.price - product.discount).toFixed(2)}`}</>
              ) : (
                <>{`$${product.price.toFixed(2)}`}</>
              )}
            </td>
            <td>
              <div className="amount-controller">
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => {
                    if (product.amount === 1) return;
                    product.amount -= 1;
                    updateCartAmount(indx, product.amount);
                  }}
                />
                <span>{product.amount}</span>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    product.amount += 1;
                    updateCartAmount(indx, product.amount);
                  }}
                />
              </div>
            </td>
            <td className="sup-sec-cart">
              {product.discount ? (
                <>{`$${(
                  product.amount *
                  (product.price - product.discount)
                ).toFixed(2)}`}</>
              ) : (
                <>{`$${(product.amount * product.price).toFixed(2)}`}</>
              )}
            </td>
            <td className="cart-rm-pro-btn">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => removeFromCart(product.cartID)}
              />
            </td>
          </tr>
        ))}
        <tr className="ls-cart-coupon-con">
          <td
            colSpan={2}
            className="coupon-sec d-flex justify-content-start align-items-center"
          >
            <input type="text" name="Coupon Code" placeholder="Coupon Code" />
            <button>apply coupon</button>
          </td>
          <td colSpan={2}>
            <NavLink to="/shop">Continue Shopping</NavLink>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CartTable;
