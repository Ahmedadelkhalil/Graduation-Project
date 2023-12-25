import React, { useRef } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const SignInModal = ({ handlingLogIn, setActiveLoginModal }) => {
  const parent = useRef();
  const handleLogIn = () => {
    handlingLogIn();
    closeModal();
  };
  const closeModal = () => {
    parent.current.click();
  };
  return (
    <div className="signInModal-container">
      <button
        type="button"
        data-bs-dismiss="modal"
        className="signIn-closeBtn"
        ref={parent}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="main-signIn-content">
        <h2>SIGN IN</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              name="user-name"
              id="user-name"
              value="Ahmed Adel"
              className="mb-3"
              readOnly
            />
          </div>
          <div>
            <input
              type="password"
              name="user-password"
              id="user-password"
              value="123"
              className="mb-3"
              readOnly
            />
          </div>
          <div className="signIn-R-L-sec d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input type="radio" name="remember-user" id="remember-user" />
              <label htmlFor="remember-user">Remember me</label>
            </div>
            <div className="FP-Link">
              <NavLink to="/forgot-password" onClick={closeModal}>
                Lost your password?
              </NavLink>
            </div>
          </div>
          <div className="signIn-btns-sec d-flex flex-column mt-4">
            <button className="mb-3" onClick={handleLogIn}>
              <NavLink>LOGIN</NavLink>
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setActiveLoginModal("RegisterModel");
              }}
            >
              <NavLink>CREATE AN ACCOUNT</NavLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
