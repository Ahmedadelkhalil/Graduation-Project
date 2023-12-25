import React from "react";

import post1 from "../../../assets/instagram-posts/post-1.jpg";
import post2 from "../../../assets/instagram-posts/post-2.jpg";
import post3 from "../../../assets/instagram-posts/post-3.jpg";
import post4 from "../../../assets/instagram-posts/post-4.jpg";
import post5 from "../../../assets/instagram-posts/post-5.jpg";
import post6 from "../../../assets/instagram-posts/post-6.jpg";
import post7 from "../../../assets/instagram-posts/post-7.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const posts = [
  { id: 0, src: post1 },
  { id: 1, src: post2 },
  { id: 2, src: post3 },
  { id: 3, src: post4 },
  { id: 4, src: post5 },
  { id: 5, src: post6 },
  { id: 6, src: post7 },
];

const InstagramPosts = () => {
  return (
    <div className="container-fluid p-0">
      <h3 className="insta-posts-title text-center py-5">LET'S BE FRIENDS!</h3>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        centeredSlides={true}
        spaceBetween={0}
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
          1100: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1850: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        className="instagram-swiper-slide"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="instagram-post-card">
              <NavLink to="/">
                <img src={post.src} alt="instagram-post" className="w-100" />
              </NavLink>
              <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramPosts;
