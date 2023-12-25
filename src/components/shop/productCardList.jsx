import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

// Imported assets
import wishList from "../../assets/icons/heart-icon.svg";
import compare from "../../assets/icons/shuffle-icon.svg";

const ProductCardList = ({
  product,
  onAddToCart,
  onAddToWishList,
  onCompare,
  isLgScreen,
  inWishList,
}) => {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    if (product.stars >= 0) {
      const star = product.stars;
      const starInt = Math.floor(star);
      const rateArr = [];
      for (let i = 0; i < starInt; i++) {
        rateArr.push(<FontAwesomeIcon icon={faStar} className="star rated" />);
      }

      if (star !== starInt) {
        rateArr.push(
          <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
        );
      }

      for (let i = 0; i < 5 - Math.ceil(star); i++) {
        rateArr.push(
          <FontAwesomeIcon icon={faStar} className="star unrated" />
        );
      }
      setRate(rateArr);
    }
  }, [product]);

  return (
    <div className="shop-layout-list-container">
      <div className="pro-list-shop-leftSide">
        <NavLink
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList } }}
        >
          <div className="img-container-shop-list">
            <img
              src={product.imgs[0].src}
              alt={product.name}
              className="w-100 imgOne"
            />
            <img
              src={product.imgs[1].src}
              alt={product.name}
              className="w-100 imgTwo"
            />
          </div>
          <div className="tags-pro-shop-list">
            {product.inStock ? (
              product.tags.indexOf("Hot") !== -1 ? (
                <p className="m-0 hot">Hot</p>
              ) : (
                ""
              )
            ) : (
              <p className="m-0 out">Out Of Stock</p>
            )}
          </div>
          <div className="dis-pro-shop-list">
            {product.discount ? (
              <p className="mb-0">{`-${Math.ceil(
                (product.discount * 100) / product.price
              )}%`}</p>
            ) : (
              ""
            )}
          </div>
        </NavLink>
      </div>
      <div className="pro-list-shop-rightSide">
        <NavLink
          to={`/shop/${product.name.replaceAll(" ", "-")}`}
          state={{ from: { product, inWishList } }}
        >
          <h2>{product.name}</h2>
        </NavLink>
        {product.discount ? (
          <p className="m-0">
            <del>{`$${product.price.toFixed(2)}`}</del>
            <span className="my-0 mx-2"></span>
            <span className="del hot">
              {`$${(product.price - product.discount).toFixed(2)}`}
            </span>
          </p>
        ) : (
          <p className="m-0">
            <span>{`$${product.price.toFixed(2)}`}</span>
          </p>
        )}
        <div>
          <p className="stars-rating-holder m-0">
            <ul className="list-unstyled">
              {rate.map((star, indx) => (
                <li key={indx}>{star}</li>
              ))}
            </ul>
            <p>{`(${product.ratings} rating)`}</p>
          </p>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <button
            type="button"
            onClick={() => onAddToCart(product, 1, inWishList)}
            className="addCart-shop-list-btn"
          >
            add to cart
          </button>
          <button
            type="button"
            onClick={() => onAddToWishList(product)}
            className="wishlist-shop-list-btn"
          >
            {inWishList ? (
              <FontAwesomeIcon icon={faHeart} />
            ) : (
              <img src={wishList} alt="wishlist-icon" className="w-100" />
            )}
          </button>
          {isLgScreen ? (
            <button
              type="button"
              onClick={() => onCompare(product)}
              data-toggle="modal"
              data-target="#compareModal"
              className="compare-shop-list-btn"
            >
              <img src={compare} alt="compare-icon" className="w-100" />
            </button>
          ) : (
            ""
          )}
        </div>
        <hr />
        <p className="product-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          maiores dolor dignissimos quisquam modi temporibus, sunt non nulla
          dicta sed!
        </p>
      </div>
    </div>
  );
};

export default ProductCardList;
