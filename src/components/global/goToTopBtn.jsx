import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const GoToTopBtn = ({ show }) => {
  const goingUpFun = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      type="button"
      aria-label="Go To Top Btn"
      className={show ? "show-go-top-btn" : "hide-go-top-btn"}
      onClick={goingUpFun}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default GoToTopBtn;
