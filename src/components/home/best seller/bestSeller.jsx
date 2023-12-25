import React from "react";
import TopBestSeller from "./topBestSeller";
import BottomBestSeller from "./bottomBestSeller";

const BestSeller = ({
  allProducts,
  bestSellerPro,
  wishlist,
  onAddToWishList,
  onAddToCart,
  onCompare,
  onQuickView,
  isLgScreen,
}) => {
  return (
    <div className="py-5">
      <h3 className="b-s-title">Best Seller</h3>
      <TopBestSeller
        bestSellerPro={bestSellerPro}
        wishlist={wishlist}
        onAddToWishList={onAddToWishList}
        onAddToCart={onAddToCart}
        onCompare={onCompare}
        onQuickView={onQuickView}
        isLgScreen={isLgScreen}
      />
      <BottomBestSeller allProducts={allProducts} wishlist={wishlist} />
    </div>
  );
};

export default BestSeller;
