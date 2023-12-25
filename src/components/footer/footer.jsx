import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Imported assets
import paymentMethods from "../../assets/payment-methods.png";

import { NavLink, Link } from "react-router-dom";

const Footer = ({ isLgScreen }) => {
  const [newsLetterValue, setNewsLetterValue] = useState("");

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="main-footer">
        <div className="footer-holder container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-md-4">
              <h5>CONTACT US</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink to="/contact">+201025521486</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/contact">Elmahalla Elkubra</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/contact">Co-Founder: Ahmed Adel</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/contact">ahmedkhalil4774@gmail.com</NavLink>
                </li>
              </ul>
              <ul className="d-flex list-unstyled gap-4">
                <li>
                  <NavLink to="/" className="link-dark fs-5">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link-danger fs-5">
                    <FontAwesomeIcon icon={faInstagram} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link-primary fs-5">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="https://github.com/Ahmedadelkhalil"
                    className="link-warning fs-5"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>SHOWROOM</h5>
              <address>
                <div className="mb-2">
                  Elmahalla Elkubra ,Gharbia Government ,Egypt
                </div>
                <div className="mb-2">Sheikh Zayed ,Cairo, Egypt</div>
                <div className="mb-2">Zamalek ,Cairo, Egypt</div>
              </address>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>SERVICES</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink to="/shop">Sale</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/shop">Quick Ship</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/shop">New Designs</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/shop">Accidental Fabric Protection</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/shop">Furniture Care</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/shop">Gift Cards</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5>NEWSLETTER</h5>
              <p>
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <form
                action="#"
                onSubmit={(e) => e.preventDefault()}
                name="news-letter-of-user"
                className="row m-0"
              >
                <input
                  type="text"
                  className="col-10"
                  value={newsLetterValue}
                  onChange={(e) => setNewsLetterValue(e.target.value)}
                  placeholder="Email address"
                />
                <button
                  type="submit"
                  className="col-2 bg-dark text-white d-flex justify-content-center align-items-center"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </form>
              <div className="w-100 d-flex justify-content-center mt-4">
                <img src={paymentMethods} alt="payment-methods-iocn" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={`container-fluid d-flex justify-content-center align-items-center bg-white copyright p-0 py-4 ${
          isLgScreen ? "" : "footer-mb-smallSc-case"
        }`}
      >
        <h6 className="p-0 m-0">
          Copyright © Ahmed Adel {currentYear} | All Rights Reserved
        </h6>
      </div>
    </>
  );
};

export default Footer;
