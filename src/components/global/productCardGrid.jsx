import React from "react";
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import cartIcon from "../../assets/icons/cart-icon.svg";
import wishListIcon from "../../assets/icons/heart-icon.svg";
import compareIcon from "../../assets/icons/shuffle-icon.svg";
import quickViewIcon from "../../assets/icons/search-icon.svg";

const ProductCardGrid = ({
  product,
  inWishList,
  onAddToWishList,
  onAddToCart,
  onCompare,
  onQuickView,
  isLgScreen,
}) => {
  return (
    <div className="container-fluid p-0">
      <div className="part-one">
        <NavLink
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList } }}
          key={product.id}
        >
          <div className="img-container">
            <img
              src={product.imgs[1].src}
              alt={product.name}
              className="w-100 img-1"
            />
            <img
              src={product.imgs[0].src}
              alt={product.name}
              className="w-100 img-2"
            />
          </div>
          {product.inStock ? (
            product.tags.includes("Hot") ? (
              <div className="hot-pro">Hot</div>
            ) : (
              ""
            )
          ) : (
            <div className="out-of-stock">out of stock</div>
          )}
          {product.discount ? (
            <div className="discount-pro">
              -{`${Math.round((product.discount * 100) / product.price)}`}%
            </div>
          ) : (
            ""
          )}
        </NavLink>
        <ul className="functional-icons">
          <li>
            <button
              type="button"
              className="top-to-bottom-effect"
              onClick={() => onAddToCart(product, 1, inWishList)}
            >
              <img src={cartIcon} alt="cart-icon" className="img-icon" />
            </button>
          </li>

          <li>
            <button
              type="button"
              className="bottom-to-top-effect"
              onClick={() => onAddToWishList(product)}
            >
              {inWishList ? (
                <FontAwesomeIcon icon={faHeart} className="fa-icon" />
              ) : (
                <img
                  src={wishListIcon}
                  alt="wishlist-icon"
                  className="img-icon"
                />
              )}
            </button>
          </li>

          {isLgScreen ? (
            <>
              <li>
                <button
                  type="button"
                  className="top-to-bottom-effect"
                  onClick={() => onCompare(product)}
                  data-bs-target="#comProductsModal"
                  data-bs-toggle="modal"
                  aria-label="compare products"
                >
                  <img
                    src={compareIcon}
                    alt="compare-icon"
                    className="img-icon"
                  />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="bottom-to-top-effect"
                  onClick={() => onQuickView(product)}
                  data-bs-target="#qvModal"
                  data-bs-toggle="modal"
                  aria-label="quick view"
                >
                  <img
                    src={quickViewIcon}
                    alt="quick-icon"
                    className="img-icon"
                  />
                </button>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="part-two text-center">
        <h4 className="p-0 mt-2 best-seller-pro-name">
          <NavLink
            to={`/shop/${product.name.replaceAll(" ", "-")}`}
            state={{ from: { product, inWishList } }}
          >
            {product.name}
          </NavLink>
        </h4>
        <h4 className="p-0 mt-2 best-seller-pro-price">
          {product.discount ? (
            <>
              <del className="text-secondary">{`$${product.price.toFixed(
                2
              )}`}</del>
              <span className="text-danger">
                {" "}
                {`$${(product.price - product.discount).toFixed(2)}`}
              </span>
            </>
          ) : (
            <span className="text-secondary">{`$${product.price.toFixed(
              2
            )}`}</span>
          )}
        </h4>
      </div>
    </div>
  );
};

export default ProductCardGrid;
