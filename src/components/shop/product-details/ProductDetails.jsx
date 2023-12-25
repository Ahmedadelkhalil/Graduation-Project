import React, { useState, useEffect } from "react";
import TopDetails from "./topDetails/topDetails";
import SectionHeader from "../../global/sectionHeader";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import BottomDetails from "./bottomDetails/bottomDetails";
import RelatedProducts from "./relatedProducts/relatedProducts";

const ProductDetails = ({
  allProducts,
  onAddToWishList,
  onAddToCart,
  onCompare,
  wishlist,
  isLgScreen,
}) => {
  const [product, setProduct] = useState({});
  const [inWishList, setInWishList] = useState(false);
  const [rate, setRate] = useState([]);

  const { state } = useLocation();

  const handleToggleWishList = (newState) => {
    setInWishList(newState);
  };

  const handleProductRate = (product) => {
    const productRateArr = [];
    let rateNum = product.stars;
    let rateNumInit = Math.floor(rateNum);
    for (let i = 0; i < rateNumInit; i++) {
      productRateArr.push(
        <FontAwesomeIcon icon={faStar} className="star rated" />
      );
    }
    if (rateNum !== rateNumInit) {
      productRateArr.push(
        <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
      );
    }
    for (let i = 0; i < 5 - Math.ceil(rateNum); i++) {
      productRateArr.push(
        <FontAwesomeIcon icon={faStar} className="star unrated" />
      );
    }

    setRate(productRateArr);
  };

  useEffect(() => {
    if (state) {
      const { product, inWishList } = state.from;
      setProduct(product);
      setInWishList(inWishList);
      handleProductRate(product);
    }
  }, [state]);

  return (
    <>
      <SectionHeader page="shop" pageLink="shop" category={product.name} />
      <div className="product-details-container py-5">
        <TopDetails
          product={product}
          onAddToWishList={onAddToWishList}
          onAddToCart={onAddToCart}
          onCompare={onCompare}
          isLgScreen={isLgScreen}
          onToggleWishList={handleToggleWishList}
          productRate={rate}
          inWishList={inWishList}
        />
        <BottomDetails product={product} />
        <RelatedProducts
          product={product}
          allProducts={allProducts}
          wishlist={wishlist}
          onAddToWishList={onAddToWishList}
          onAddToCart={onAddToCart}
          onCompare={onCompare}
          isLgScreen={isLgScreen}
        />
      </div>
    </>
  );
};
export default ProductDetails;
