import React from "react";

import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const TopOurCollection = ({ categories }) => {
  return (
    <div className="container-fluid p-0 pb-5" data-sec="section-swiper">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 500,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {categories.map((category, indx) => {
          if (category.name === "All") return null;
          return (
            <SwiperSlide key={indx}>
              <div className="category-holder w-100">
                <NavLink to="/shop" state={{ from: category.name }}>
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-100 h-100"
                  />
                </NavLink>
                <NavLink>
                  <NavLink to="/shop" className="tar">
                    {category.name}
                  </NavLink>
                </NavLink>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopOurCollection;
