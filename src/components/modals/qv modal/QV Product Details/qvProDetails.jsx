import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const QvProDetails = ({ product, addingToCart, wishlist }) => {
  const [proStars, setProStars] = useState([]);
  const [amount, setAmount] = useState(1);
  const [inWishList, setInWishList] = useState(false);

  useEffect(() => {
    if (wishlist.length > 0) {
      wishlist?.findIndex((item) => item.id === product.id) !== -1
        ? setInWishList(true)
        : setInWishList(false);
    }
  }, [product]);

  useEffect(() => {
    const productStars = [];
    const stars = product?.stars;
    const starsInt = Math.floor(stars);
    for (let i = 0; i < starsInt; i++) {
      productStars.push(
        <FontAwesomeIcon icon={faStar} className="star rated" />
      );
    }
    if (stars !== starsInt) {
      productStars.push(
        <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
      );
    }
    for (let i = 0; i < 5 - Math.ceil(stars); i++) {
      productStars.push(
        <FontAwesomeIcon icon={faStar} className="star unrated" />
      );
    }
    setProStars(productStars);
  }, [product]);
  return (
    <div className="qv-pro-details-container">
      <h2 className="qv-pro-name mb-3">{product?.name}</h2>
      {product?.discount ? (
        <div className="qv-pro-price mb-3">
          <del>{`$${product?.price.toFixed(2)}`}</del>
          <span>{`$${(product?.price - product?.discount).toFixed(2)}`}</span>
        </div>
      ) : (
        <div className="qv-pro-price mb-3">
          <span>{`$${product?.price.toFixed(2)}`}</span>
        </div>
      )}
      <div className="qv-pro-stars-ratings d-flex align-items-center mb-3">
        <ul className="list-unstyled d-flex align-items-center m-0">
          {proStars?.map((star, indx) => (
            <li key={indx}>{star}</li>
          ))}
        </ul>
        <div>{`(${product?.ratings} ratings)`}</div>
      </div>
      <hr />
      <div className="qv-pro-desc mb-3">{`Features Of That Product Are : ${product?.description}`}</div>
      <div className="qv-pro-addToCart d-flex align-items-center mb-3">
        <div className="qv-pro-counter">
          <button
            type="button"
            onClick={() => {
              if (amount === 1) return;
              setAmount(amount - 1);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>{amount}</span>
          <button
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="qv-pro-add2cartBtn">
          <button
            type="button"
            onClick={() => addingToCart(product, amount, inWishList)}
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="qv-buy-now-btn">
        <button>buy it now</button>
      </div>
    </div>
  );
};

export default QvProDetails;
