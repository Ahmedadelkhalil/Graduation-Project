import React from "react";
import MainSlide from "./main slider/mainSlide";
import OurCollection from "./our collection/ourCollection";
import BestSeller from "./best seller/bestSeller";
import Qualities from "./qualities/qualities";
import InstagramPosts from "./instagram/instagramPosts";

const Home = ({
  categories,
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
    <>
      <MainSlide />
      <OurCollection categories={categories} />
      <BestSeller
        allProducts={allProducts}
        bestSellerPro={bestSellerPro}
        wishlist={wishlist}
        onAddToWishList={onAddToWishList}
        onAddToCart={onAddToCart}
        onCompare={onCompare}
        onQuickView={onQuickView}
        isLgScreen={isLgScreen}
      />
      <Qualities />
      <InstagramPosts />
    </>
  );
};

export default Home;
