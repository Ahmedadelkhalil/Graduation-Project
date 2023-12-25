import React, { useState, useEffect } from "react";
import userIcon from "../../../../assets/icons/person-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ product }) => {
  const [rates, setRates] = useState([]);
  const productReviewsArr = product.reviews;

  useEffect(() => {
    const rate = [];

    for (let i = 0; i < product.reviews.length; i++) {
      const stars = product.reviews[i].rating;

      const starsInt = Math.floor(stars);
      for (let i = 0; i < starsInt; i++) {
        rate.push(<FontAwesomeIcon icon={faStar} className="star rated" />);
      }
      if (stars !== starsInt) {
        rate.push(
          <FontAwesomeIcon icon={faStarHalfStroke} className="star rated" />
        );
      }
      for (let i = 0; i < 5 - Math.ceil(stars); i++) {
        rate.push(<FontAwesomeIcon icon={faStar} className="star unrated" />);
      }
    }
    return setRates(rate);
  }, [product, rates]);

  const handleStarsOfUserRating = (indx) => {
    let start = 5 * (indx - 1);
    let end = 5 * indx;
    return rates
      .slice(start, end)
      .map((rate, indx) => <li key={indx}>{rate}</li>);
  };

  return (
    <>
      {productReviewsArr?.map((userReview, indx) => (
        <div className="reviewCardContainer mb-2" key={indx}>
          <div className="top-details">
            <div className="top-d-left-side">
              <img src={userIcon} alt="user-icon" />
            </div>
            <div className="top-d-right-side">
              <ul className="list-unstyled rev-stars-sec mb-0">
                {handleStarsOfUserRating(indx + 1)}
              </ul>
              <h6 className="mb-0 text-capitalize">{userReview.name}</h6>
              <p>{userReview.date}</p>
            </div>
          </div>
          <div className="bottom-details">
            <p className="user-review">{userReview.review}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
