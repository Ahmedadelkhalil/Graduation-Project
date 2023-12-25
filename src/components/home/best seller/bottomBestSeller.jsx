import React, { useState, useEffect } from "react";

import discoverIcon from "../../../assets/discover/discover.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const BottomBestSeller = ({ allProducts, wishlist }) => {
  const chairName = "Zunkel Schwarz";
  const sofaName = "Mundo Sofa With Cushion";

  const [chair, setChair] = useState();
  const [sofa, setSofa] = useState();

  useEffect(() => {
    allProducts?.forEach((product) => {
      if (product.name === chairName) {
        const inWishlist =
          wishlist?.findIndex((item) => item.id === product.id) !== -1
            ? true
            : false;
        setChair({ product, inWishlist });
      } else if (product.name === sofaName) {
        const inWishlist =
          wishlist?.findIndex((item) => item.id === product.id) !== -1
            ? true
            : false;
        setSofa({ product, inWishlist });
      }
    });
  }, [allProducts, wishlist]);

  return (
    <div className="bottom-discover-sec pt-5 container-fluid">
      <div className="row">
        <div className="col-md-6 discover-left-sec position-relative p-0">
          <img src={discoverIcon} alt="discover-icon" className="w-100 h-100" />
          <button className="btn-1">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <div className="btn-1-pro">
            {chair ? (
              <NavLink
                to={`/shop/${chairName.replaceAll(" ", "-")}`}
                state={{ from: chair }}
              >
                <img
                  src={chair.product.imgs[0].src}
                  alt={chair.product.name}
                  className="w-100"
                />
                <h5>{chair.product.name}</h5>
                <p>{`$${chair.product.price}`}</p>
              </NavLink>
            ) : (
              "Product Not Found"
            )}
          </div>

          <button className="btn-2">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <div className="btn-2-pro">
            {sofa ? (
              <NavLink
                to={`/shop/${sofaName.replaceAll(" ", "-")}`}
                state={{ from: sofa }}
              >
                <img
                  src={sofa.product.imgs[0].src}
                  alt={sofa.product.name}
                  className="w-100"
                />
                <h5>{sofa.product.name}</h5>
                <p>{`$${sofa.product.price}`}</p>
              </NavLink>
            ) : (
              "Product Not Found"
            )}
          </div>
        </div>
        <div className="col-md-6 discover-right-sec">
          <p>Discover the new Koti Sofa</p>
          <h2>Like lounging on a cloud</h2>
          <button>
            <NavLink to="/shop">shop now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBestSeller;

// <NavLink
//               to={`/shop/${chairName.replaceAll(" ", "-")}`}
//               state={{ from: chair }}
//             >
//               hello
//             </NavLink>
