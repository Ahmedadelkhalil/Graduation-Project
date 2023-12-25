import React from "react";
import freeShppingIcon from "../../../assets/icons/shipping-icon.svg";
import paymentIcon from "../../../assets/icons/payment-icon.svg";
import returnIcon from "../../../assets/icons/return-icon.svg";
import supporttIcon from "../../../assets/icons/support-icon.svg";

function Qualities() {
  return (
    <div className="container-fluid">
      <div className="row quality-sec-holder">
        <div className="col-md-6 col-lg-3">
          <img src={freeShppingIcon} alt="freeshipping-icon" />
          <h3>Free Shipping</h3>
          <p>You will love at great low prices</p>
        </div>

        <div className="col-md-6 col-lg-3">
          <img src={paymentIcon} alt="payment-icon" />
          <h3>Flexible Payment</h3>
          <p>Pay with Multiple Credit Cards</p>
        </div>

        <div className="col-md-6 col-lg-3">
          <img src={returnIcon} alt="return-icon" />
          <h3>14 Day Returns</h3>
          <p>Within 30 days for an exchange.</p>
        </div>

        <div className="col-md-6 col-lg-3">
          <img src={supporttIcon} alt="support-icon" />
          <h3>Online Support</h3>
          <p>24 hours a day, 7 days a week</p>
        </div>
      </div>
    </div>
  );
}

export default Qualities;
