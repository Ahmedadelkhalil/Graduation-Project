import React from "react";
import ProductCardGrid from "../../global/productCardGrid";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const TopBestSeller = ({
  bestSellerPro,
  wishlist,
  onAddToWishList,
  onAddToCart,
  onCompare,
  onQuickView,
  isLgScreen,
}) => {
  return (
    <div className="container-fluid p-0">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1850: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="topSeller-slider"
      >
        {bestSellerPro?.map((product) => {
          let inWishList;
          if (wishlist) {
            inWishList =
              wishlist.findIndex((item) => item.id === product.id) !== -1
                ? true
                : false;
          }
          return (
            <SwiperSlide key={product.id}>
              <ProductCardGrid
                product={product}
                onAddToWishList={onAddToWishList}
                onAddToCart={onAddToCart}
                onCompare={onCompare}
                onQuickView={onQuickView}
                isLgScreen={isLgScreen}
                inWishList={inWishList}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopBestSeller;
