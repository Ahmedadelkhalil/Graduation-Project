import React from "react";
import SectionHeader from "../../global/sectionHeader";
import CartTable from "./CartPage Table/CartTable";
import CartTotals from "./CartPage Totals/cartTotals";

const Cart = ({ cart, removeFromCart, updateCartAmount, totalCost }) => {
  return (
    <>
      <SectionHeader page="shop" pageLink="shop" category="shopping cart" />
      {cart.length !== 0 ? (
        <div className="cartPage-Container container-fluid row my-5">
          <div className="col-lg-8 cart-leftSide">
            <CartTable
              cart={cart}
              removeFromCart={removeFromCart}
              updateCartAmount={updateCartAmount}
            />
          </div>
          <div className="col-lg-4">
            <CartTotals totalCost={totalCost} />
          </div>
        </div>
      ) : (
        <p className="no-items-cart-msg">No items in cart</p>
      )}
    </>
  );
};

export default Cart;
