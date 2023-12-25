import React, { useState } from "react";
import Carousel from "./carousel";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

// Imported assets
import wishlist from "../../../../assets/icons/heart-icon.svg";
import compare from "../../../../assets/icons/shuffle-icon.svg";

import { Link } from "react-router-dom";

const TopDetails = ({
  product,
  onAddToWishList,
  onAddToCart,
  onCompare,
  isLgScreen,
  onToggleWishList,
  productRate,
  inWishList,
}) => {
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [amount, setAmount] = useState(1);
  const sizes = [];
  const colors = [];

  const handleAmountInc = (num) => {
    num += 1;
    setAmount(num);
  };
  const handleAmountDec = (num) => {
    if (num === 1) return;
    num -= 1;
    setAmount(num);
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row">
        <div className="carousel-container col-sm-12 col-md-12 col-lg-6">
          <Carousel product={product} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 product-right-side-details">
          <h2 style={{ marginBottom: "16px", fontWeight: "400" }}>
            {product.name}
          </h2>
          {product.discount ? (
            <p>
              <del className="del-price">{`$${Number.parseInt(
                product.price
              ).toFixed(2)}`}</del>
              <span className="m-1"></span>
              <span
                style={{ color: "red", fontWeight: "500" }}
              >{`$${Number.parseInt(product.price - product.discount).toFixed(
                2
              )}`}</span>
            </p>
          ) : (
            <p>{`$${Number.parseInt(product.price).toFixed(2)}`}</p>
          )}
          <ul className="pro-details-stars list-unstyled d-flex align-items-center">
            {productRate?.map((rate, indx) => (
              <li key={indx}>{rate}</li>
            ))}
            <span className="pd-rating">{`( ${product.ratings} ratings )`}</span>
          </ul>
          <hr />
          <p className="eli">{`the Product has alot of features such as : ${product.description}`}</p>
          <h6 className="sizes-ava">
            <span>SIZE: </span>
            {product.size?.map((item) => (
              <div className="val">
                <input
                  type="radio"
                  value={item}
                  id={`${item}`}
                  name={`${item}`}
                  onClick={(e) => {
                    if (e.target.checked) {
                      sizes.push(e.target.value);
                      setAvailableSizes(sizes);
                    } else {
                      let indx = sizes.indexOf(e.target.value);
                      sizes.splice(indx, 1);
                      setAvailableSizes(sizes);
                    }
                  }}
                />
                <label
                  htmlFor={`${item}`}
                  className={
                    availableSizes.indexOf(item) !== -1
                      ? "active-check-size"
                      : ""
                  }
                >
                  {item}
                </label>
              </div>
            ))}
          </h6>

          <h6 className="colors-ava">
            <span>COLORS: </span>
            {product.colors?.map((item) => (
              <div className="val">
                <input
                  type="radio"
                  value={item}
                  id={`${item}`}
                  name={`${item}`}
                  onClick={(e) => {
                    if (e.target.checked) {
                      colors.push(e.target.value);
                      setAvailableColors(colors);
                    } else {
                      let indx = colors.indexOf(e.target.value);
                      colors.splice(indx, 1);
                      setAvailableColors(colors);
                    }
                  }}
                />
                <label
                  htmlFor={`${item}`}
                  className={
                    availableColors.indexOf(item) !== -1
                      ? "active-check-color"
                      : ""
                  }
                  style={{ backgroundColor: item }}
                ></label>
              </div>
            ))}
          </h6>
          <div className="btns-part-1 row">
            <div className="col-3 left-btns-cust">
              <button onClick={() => handleAmountDec(amount)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{amount}</span>
              <button onClick={() => handleAmountInc(amount)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="col-9">
              <button
                className="add-cart-lg-btn"
                onClick={() => onAddToCart(product, amount, inWishList)}
              >
                add to cart
              </button>
            </div>
          </div>
          <div className="btns-part-2 row">
            <div className="col-12 w-100">
              <button>buy it now</button>
            </div>
          </div>
          <div className="addingToW-Com mt-2 d-flex justify-cintent-start align-items-center">
            <button
              onClick={() => {
                onToggleWishList(!inWishList);
                onAddToWishList(product);
              }}
              className="pro-d-btns"
            >
              {inWishList ? (
                <FontAwesomeIcon icon={faHeart} className="icon-heart-cust" />
              ) : (
                <img src={wishlist} alt="wishlist-icon" className="icon-cust" />
              )}
              <span>add to wishlist</span>
            </button>
            {isLgScreen ? (
              <button onClick={() => onCompare(product)} className="pro-d-btns">
                <img src={compare} alt="wishlist-icon" className="icon-cust" />
                <span>compare</span>
              </button>
            ) : (
              ""
            )}
          </div>
          <hr />
          <div className="p-details-deep-info">
            <p>
              SKU: <span>{product.SKU}</span>
            </p>
            <p>
              CATEGORY: <span>{product.category}</span>
            </p>
            <p>
              TAGS: <span>{product.tags?.join(", ")}</span>
            </p>
          </div>
          <hr />
          <div className="social-media-pd-dep d-flex justify-content-start align-items-center">
            <Link to="#" className="fb-link">
              <div>
                <FontAwesomeIcon icon={faFacebookF} />
                <span>facebook</span>
              </div>
            </Link>
            <Link to="#" className="tw-link">
              <div>
                <FontAwesomeIcon icon={faXTwitter} />
                <span>twitter</span>
              </div>
            </Link>
            <Link to="#" className="pi-link">
              <div>
                <FontAwesomeIcon icon={faPinterest} />
                <span>pinterest</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDetails;
