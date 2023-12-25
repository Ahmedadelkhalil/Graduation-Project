import React from "react";
import { NavLink } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="d-flex justify-content-between align-items-start mb-3">
      <div className="left-side-product-checkout">
        <NavLink
          className="proImg-checkout"
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList: product.inWishList } }}
        >
          <img src={product.imgs[0].src} alt={product.name} className="w-100" />
        </NavLink>
        <div className="proName-QTY">
          <NavLink
            to={`/shop/${product.name.replaceAll(" ", "-")}`}
            state={{ from: { product, inWishList: product.inWishList } }}
          >
            {product.name}
          </NavLink>
          <span>QTY: {product.amount}</span>
        </div>
      </div>
      <div className="right-side-product-checkout">
        {product.discount ? (
          <p>
            ${((product.price - product.discount) * product.amount).toFixed(2)}
          </p>
        ) : (
          <p>${(product.price * product.amount).toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
