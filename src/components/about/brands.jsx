import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Brands = ({ brands }) => {
  return (
    <div className="brandsSlider-container text-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 500,
        }}
        speed={1000}
      >
        {brands.map((brand, indx) => (
          <SwiperSlide
            key={indx}
            className="brandsSlider-brand-card-holder d-flex justify-content-center align-items-center"
          >
            <img src={brand.img} alt={brand.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
