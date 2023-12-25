import React from "react";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Form from "./form";
import SectionHeader from "../global/sectionHeader";
import Map from "./map";

const Contact = () => {
  return (
    <>
      <SectionHeader page="Contact Us" pageLink="contact" />
      <Map />
      <div className="contactPage-container">
        <div className="contact-help-section container">
          <span>
            <FontAwesomeIcon icon={faLightbulb} />
          </span>
          <h1>Need Help?</h1>
          <div className="contact-help-section-info row w-100">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-1 mb-md-3">PHONE NUMBER</h5>
              <p>01025521486</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-1 mb-md-3">CUSTOMER SERVICE</h5>
              <p>Monday to Friday</p>
              <p>8:00am – 4:00pm Cairo, EG time (UTC +10)</p>
              <p>Saturday and Sunday closed</p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-1 mb-md-3">RETURNS POLICY</h5>
              <p>
                For information on Returns and Refunds, please click{" "}
                <NavLink to="/faq">here</NavLink>.
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Contact;
