import React, { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ReviewCard from "./reviewCard";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BottomDetails = ({ product }) => {
  const [active, setActive] = useState("Description");
  const titles = ["Description", "Additional clientInformation", "Reviews"];
  const [numsOfReviews, setNumsOfReviews] = useState(0);
  const [numsOfAddedReviews, setNumsOfAddedReviews] = useState(0);
  const [yourRate, setYourRate] = useState(0);
  const [rateHover, setRateHover] = useState(0);

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userTextReview, setUserTextReview] = useState();
  const [userStarReview, setUserStarReview] = useState(0);

  const productReviewsAddedArr = product.reviews;

  const [parent] = useAutoAnimate({ duration: 500 });

  useEffect(() => {
    setNumsOfReviews(product.reviews?.length);
  }, [product]);

  const handleChoosingRate = (num) => {
    setYourRate(num);
    setUserStarReview(num);
  };
  const handleChoosingRateHover = (num) => {
    setRateHover(num);
  };
  const handleChoosingRateLeave = () => {
    setRateHover(0);
  };

  const uploadUserReview = () => {
    const revDate = new Date().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const dataObj = {
      id: productReviewsAddedArr.length,
      name: userName,
      rating: userStarReview,
      review: userTextReview,
      date: revDate,
    };
    console.log(dataObj);
    if (
      userStarReview !== 0 &&
      userTextReview.length !== 0 &&
      userName.length !== 0 &&
      userEmail.length !== 0
    ) {
      productReviewsAddedArr.push(dataObj);
      setNumsOfAddedReviews(numsOfAddedReviews + 1);
      setUserName("");
      setUserEmail("");
      setUserStarReview(0);
      handleChoosingRate(0);
      setUserTextReview("");
    }
  };

  return (
    <div className="bottomDetailsContainer mt-3">
      <hr />
      <ul className="list-unstyled fi-ul">
        {titles.map((title, indx) => (
          <li
            key={indx}
            onClick={() => {
              setActive(title);
            }}
            className={active === title ? "active" : ""}
          >
            {title === "Reviews"
              ? `${title} (${numsOfReviews + numsOfAddedReviews})`
              : title}
          </li>
        ))}
      </ul>
      <div className="bottomDetailsContentContainer" ref={parent}>
        {active === "Description" ? (
          <p className="bottom-p-d-section">{product.description}</p>
        ) : (
          ""
        )}
        {/* ============================================================ */}
        {active === "Additional clientInformation" ? (
          <div className="row bottom-p-ai-section">
            <div className="col-4">Color</div>
            <div className="col-8">
              {product.additionalInformation.colors.join(", ")}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* ============================================================ */}
        {active === "Reviews" ? (
          <div className="bottom-p-r-section">
            <p className="bottom-p-r-section-main-title">
              {numsOfReviews + numsOfAddedReviews} review for {product.name}
            </p>
            <div ref={parent}>
              <ReviewCard
                product={product}
                productReviewsAddedArr={productReviewsAddedArr}
              />
            </div>
            <div className="bottom-p-r-section-form mt-5">
              <div className="f-title">
                <FontAwesomeIcon icon={faPenToSquare} />
                <p className="text-uppercase">add a review</p>
              </div>
              <p className="filling-instructions mt-4">
                Your email address will not be published. Required fields are
                marked <span className="red">*</span>
              </p>
              <p className="userSelectionForRating">
                your rating
                <ul className="list-unstyled">
                  {Array.of(1, 2, 3, 4, 5).map((ele, indx) => (
                    <li key={indx}>
                      <FontAwesomeIcon
                        icon={faStar}
                        className={`star ${yourRate >= ele ? "rated" : ""} ${
                          rateHover >= ele ? "rated" : ""
                        }`}
                        onClick={() => handleChoosingRate(ele)}
                        onMouseOver={() => handleChoosingRateHover(ele)}
                        onMouseLeave={handleChoosingRateLeave}
                      />
                    </li>
                  ))}
                </ul>
              </p>
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="row d-flex flex-column-reverse d-md-flex flex-md-row">
                  <div className="col-sm-12 col-md-6 form-left-side">
                    <input
                      type="text"
                      placeholder="Name *"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
                      required
                    />
                    <input
                      type="submit"
                      value="SUBMIT"
                      onClick={(e) => {
                        e.preventDefault();
                        uploadUserReview();
                      }}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 form-right-side mb-3 mb-md-0">
                    <textarea
                      name=""
                      id=""
                      placeholder="Your Review *"
                      onChange={(e) => setUserTextReview(e.target.value)}
                      value={userTextReview}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* ============================================================ */}
      </div>
    </div>
  );
};

export default BottomDetails;
