import React from "react";
import ProductCardGrid from "../../../global/productCardGrid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const RelatedProducts = ({
  product,
  allProducts,
  wishlist,
  onAddToWishList,
  onAddToCart,
  onCompare,
  isLgScreen,
}) => {
  console.log(allProducts);
  return (
    <div className="RelatedProducts-container">
      <hr />
      <h2 className="RelatedProducts-title">
        <span>related products</span>
      </h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={true}
        loop={true}
      >
        {allProducts
          .filter((prod) => {
            return prod.category === product.category && prod.id !== product.id;
          })
          .map((product) => {
            let inWishList;
            wishlist?.findIndex((ele) => {
              return (inWishList =
                (ele.id === product.id) !== -1 ? true : false);
            });
            return (
              <SwiperSlide>
                <ProductCardGrid
                  product={product}
                  isLgScreen={isLgScreen}
                  onAddToWishList={onAddToWishList}
                  onAddToCart={onAddToCart}
                  onCompare={onCompare}
                  inWishList={inWishList}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
