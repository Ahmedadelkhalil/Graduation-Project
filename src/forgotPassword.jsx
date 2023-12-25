import React from "react";
import SectionHeader from "./components/global/sectionHeader";
import forgetPasswordImg from "./assets/icons/forgot-password.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <SectionHeader page="Forgot Password" pageLink="forgot-password" />
      <div className="forgotPassword-container container my-5 flex-column flex-md-row">
        <div className="forget-password-left">
          <img src={forgetPasswordImg} alt="forgetPassword-img" />
        </div>
        <div className="forget-password-right">
          <h1>reset your password</h1>
          <p>Fear not. we'll email you instructions to reset your password.</p>
          <form
            action="#"
            onSubmit={(e) => e.target.preventDefault()}
            className="mb-3"
          >
            <div className="forgotPass-email">
              <label htmlFor="forgotPass-email">Email</label>
              <input
                type="email"
                id="forgotPass-email"
                placeholder="Enter Your Email .."
              />
            </div>
            <div className="forgotPass-btn">
              <button type="button">reset password</button>
            </div>
          </form>
          <div className="forgotPass-privacy-policy">
            <p>
              &copy;{currentYear} ahmed adel all rights reserved. check our{" "}
              <Link to="#">
                <span>Cookies preferences </span>
              </Link>
              ,
              <Link to="#">
                <span>privacy </span>
              </Link>
              and
              <Link to="#">
                <span> terms</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
