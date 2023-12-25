import React, { useEffect, useState } from "react";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonials = ({ testimonials }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const rates = [];
    for (let i = 0; i < testimonials.length; i++) {
      const star = testimonials[i].rate;
      const starInt = Math.floor(star);
      for (let i = 0; i < starInt; i++) {
        rates.push(<FontAwesomeIcon icon={faStar} className="star rated" />);
      }
      if (starInt !== star) {
        rates.push(
          <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
        );
      }
      for (let i = 0; i < 5 - Math.ceil(star); i++) {
        rates.push(<FontAwesomeIcon icon={faStar} className="star unrated" />);
      }
    }
    setStars(rates);
  }, [testimonials]);
  const handlingStars = (indx) => {
    const start = 5 * (indx - 1);
    const end = 5 * indx;
    return stars
      .slice(start, end)
      .map((star, indx) => <li key={indx}>{star}</li>);
  };
  return (
    <div className="testimonials-container container">
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
        centeredSlides={true}
        loop={true}
        cssMode={true}
      >
        {testimonials.map((person, indx) => (
          <SwiperSlide>
            <div className="testimonials-card-container row" key={indx}>
              <div className="testimonials-card-left col-12 col-md-5 p-0">
                <img src={person.pic} alt={`${person.name}`} />
              </div>
              <div className="testimonials-card-right mt-3 mt-md-0 col-12 col-md-7">
                <span>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                <div className="testimonials-card-right-txt">
                  <p className="testimonials-card-right-txt-opinion">
                    {person.feedback}
                  </p>
                  <div className="testimonials-card-right-txt-name-rate">
                    <p className="m-0 d-flex justify-content-center align-items-start flex-column">
                      <span>{person.name}</span>{" "}
                      <span>
                        <ul className="list-unstyled d-flex m-0">
                          {handlingStars(indx + 1)}
                        </ul>
                      </span>
                    </p>
                    <p className="m-0 mt-3">customer</p>
                  </div>
                </div>
                <span>
                  <FontAwesomeIcon icon={faQuoteRight} />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
