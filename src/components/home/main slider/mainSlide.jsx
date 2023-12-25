import React from "react";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../../assets/main-slider/slide1.jpg";
import slide2 from "../../../assets/main-slider/slide2.jpg";
import slide3 from "../../../assets/main-slider/slide3.jpg";
import slide4 from "../../../assets/main-slider/slide4.jpg";

const MainSlide = () => {
  const slides = [
    {
      src: slide1,
      heading: ["For the", "comfort seakers!"],
      paragraph: "Soft seats that welcome you home",
      id: 0,
    },
    {
      src: slide2,
      heading: ["It's our", "anniversary!"],
      paragraph: "Check what offers we have",
      id: 1,
    },
    {
      src: slide3,
      heading: ["The spring", "collection is here!"],
      paragraph: "Check it out",
      id: 2,
    },
    {
      src: slide4,
      heading: ["Made", "for laze-ins!"],
      paragraph: "You'll never feel more comfortable",
      id: 3,
    },
  ];

  return (
    <div className="container-fluid p-0">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        loop={true}
        cssMode={true}
        className="main-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="row main-slider">
            <div className="col-6 main-slider-leftSide">
              <img src={slide.src} alt="slider-img" />
            </div>
            <div className="col-6 main-slide-rightSide">
              <h1>{slide.heading[0]}</h1>
              <h1 className="mb-3">{slide.heading[1]}</h1>
              <p>{slide.paragraph}</p>
              <NavLink to="/shop">
                <button className="btn bg-black text-white text-uppercase">
                  shop now
                </button>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlide;
