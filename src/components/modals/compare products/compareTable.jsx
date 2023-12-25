import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const CompareTable = ({
  compareProducts,
  removeFromCompare,
  addingToCart,
  wishlist,
}) => {
  const [proStars, setProStars] = useState([]);

  useEffect(() => {
    const productStars = [];
    for (let i = 0; i < compareProducts.length; i++) {
      const stars = compareProducts[i]?.stars;
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
    }

    setProStars(productStars);
  }, [compareProducts]);

  const handlingStars = (indx) => {
    const start = 5 * (indx - 1);
    const end = 5 * indx;
    return proStars
      .slice(start, end)
      .map((star, indx) => <li key={indx}>{star}</li>);
  };

  return (
    <div className="compareTableContainer">
      <table>
        <div className="R-One">
          <tr className="row">
            <th className="col-2">&nbsp;</th>
            {compareProducts.map((product, indx) => (
              <th key={indx} className="col">
                {product.name}{" "}
                <small onClick={() => removeFromCompare(product.id)}>
                  remove
                </small>
              </th>
            ))}
          </tr>
        </div>
        <div className="R-Two">
          <tr className="row">
            <th className="comNav col-2">Image</th>
            {compareProducts.map((product, indx) => (
              <td key={indx} className="col">
                <img
                  src={product.imgs[0].src}
                  alt={product.name}
                  className="w-100"
                />
              </td>
            ))}
          </tr>
        </div>

        <div className="R-Three">
          <tr className="row">
            <th className="comNav col-2">SKU</th>
            {compareProducts.map((product, indx) => (
              <td key={indx} className="col">
                <span>{product.SKU}</span>
              </td>
            ))}
          </tr>
        </div>
        {/* ================================================= */}
        <div className="R-Four">
          <tr className="row">
            <th className="comNav col-2">Rating</th>
            {compareProducts.map((product, indx) => (
              <td key={indx} className="col">
                <ul className="list-unstyled d-flex m-0">
                  {handlingStars(indx + 1)}
                </ul>
              </td>
            ))}
          </tr>
        </div>
        {/* ================================================= */}
        <div className="R-Five">
          <tr className="row">
            <th className="comNav col-2">Price</th>
            {compareProducts.map((product, indx) => (
              <td key={indx} className="col d-flex align-items-center">
                {product.discount ? (
                  <>
                    <del className="com-del-price">{`$${product.price.toFixed(
                      2
                    )}`}</del>
                    <span className="com-new-price">{`$${(
                      product.price - product.discount
                    ).toFixed(2)}`}</span>
                  </>
                ) : (
                  <>
                    <span className="com-curr-price">{`$${product.price.toFixed(
                      2
                    )}`}</span>
                  </>
                )}
              </td>
            ))}
          </tr>
        </div>
        {/* ================================================= */}
        <div className="R-Six">
          <tr className="row">
            <th className="comNav col-2">Description</th>
            {compareProducts.map((product, indx) => (
              <td key={indx} className="col">
                {product.description}
              </td>
            ))}
          </tr>
        </div>
        {/* ================================================= */}
        <div className="R-Seven">
          <tr className="row">
            <th className="comNav col-2">Dimensions</th>
            {compareProducts.map((product, indx) => (
              <td key={indx} className="col">
                <span>N/A</span>
              </td>
            ))}
          </tr>
        </div>
        {/* ================================================= */}
        <div className="R-Eight">
          <tr className="row">
            <th className="comNav col-2 d-flex justify-content-start align-items-center">
              Add to cart
            </th>
            {compareProducts.map((product, indx) => {
              let inWishList;
              if (wishlist) {
                inWishList =
                  wishlist.findIndex((ele) => ele.id === product.id) !== -1
                    ? true
                    : false;
              }
              return (
                <td key={indx} className="col">
                  <button
                    type="button"
                    onClick={() => addingToCart(product, 1, inWishList)}
                  >
                    Add to cart
                  </button>
                </td>
              );
            })}
          </tr>
        </div>
        {/* ================================================= */}
      </table>
    </div>
  );
};

export default CompareTable;
