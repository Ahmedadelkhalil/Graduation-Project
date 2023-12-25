import React from "react";
import SectionHeader from "../../global/sectionHeader";
import BillingDetails from "./billingDetails.jsx/billingDetails";
import PaymentDetails from "./paymentDetails.jsx/paymentDetails";

const Checkout = ({ cart, cartTotal, isLogged }) => {
  return (
    <div className="container-fluid">
      <SectionHeader page="shop" pageLink="shop" category="check out" />
      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
        className="row mt-5"
      >
        <div className="billingSec col-lg-7 col-xl-8">
          <BillingDetails isLogged={isLogged} />
        </div>
        <div className="paymentSec col-lg-5 col-xl-4">
          <PaymentDetails cart={cart} cartTotal={cartTotal} />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
