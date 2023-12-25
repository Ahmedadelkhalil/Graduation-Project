import React from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import SectionHeader from "../global/sectionHeader";

const WishlistPage = ({ wishlist, addingToCart, removeFromWishlist }) => {
  const [parent] = useAutoAnimate({ duration: 400 });
  return (
    <div>
      <SectionHeader page="shop" pageLink="shop" category="Wishlist" />
      <div className="container-fluid mt-5" ref={parent}>
        {wishlist.length !== 0 ? (
          wishlist.map((product, indx) => (
            <div className="wishlist-card-container row mx-0 mb-2" key={indx}>
              <div className="wishlist-card-leftSide col-9 d-flex align-items-center">
                <div className="wishlistPage-removeFromWishlist-btn">
                  <button onClick={() => removeFromWishlist(product)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <div className="wishlistPage-pro-img">
                  <NavLink
                    to={`/shop/${product.name.replaceAll(" ", "-")}`}
                    state={{ from: { product, inWishList: true } }}
                  >
                    <img src={product.imgs[0].src} alt={product.name} />
                  </NavLink>
                </div>
                <div className="wishlistPage-pro-info d-flex flex-column gap-1">
                  <NavLink
                    to={`/shop/${product.name.replaceAll(" ", "-")}`}
                    state={{ from: { product, inWishList: true } }}
                  >
                    {product.name}
                  </NavLink>
                  {product.discount ? (
                    <div className="d-flex align-items-center">
                      <del className="wishlistPage-delPrice">{`$${product.price.toFixed(
                        2
                      )}`}</del>
                      <span className="wishlistPage-currPrice">{`$${(
                        product.price - product.discount
                      ).toFixed(2)}`}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="wishlistPage-currPrice">{`$${product.price.toFixed(
                        2
                      )}`}</span>
                    </div>
                  )}
                  <div className="wishlistPage-proDateUserAddedIn">
                    {product.addingDate}
                  </div>
                </div>
              </div>
              <div className="wishlist-card-rightSide col-3">
                {product.inStock ? (
                  <p className="m-0">In stock</p>
                ) : (
                  <p p className="m-0">
                    Out of stock
                  </p>
                )}
                <button onClick={() => addingToCart(product, 1, true)}>
                  add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="wishlist-empty-msg">
            Wishlist is empty try adding products ..
          </p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
