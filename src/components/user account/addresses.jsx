import React from "react";

const Addresses = () => {
  return (
    <div className="my-account-address-container mt-4 mt-md-0">
      <p className="my-account-address-main-title">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="my-account-address-boxes row mt-4">
        <div className="my-account-box-holder col-6">
          <div className="my-account-address-box-top d-flex justify-content-between align-items-center">
            <h4 className="m-0">Billing address</h4>
            <button>edit</button>
          </div>
          <div className="my-account-address-box-bottom d-flex flex-column">
            <p>20 Shokry El-Kwatly , Elmahallah</p>
            <p>Gharbia,EG</p>
            <p>Ahmed Adel, PN 1234</p>
          </div>
        </div>

        <div className="my-account-box-holder col-6">
          <div className="my-account-address-box-top d-flex justify-content-between align-items-center">
            <h4 className="m-0">Shipping address</h4>
            <button>edit</button>
          </div>
          <div className="my-account-address-box-bottom d-flex flex-column">
            <p>1234 Express Lane,</p>
            <p>Elmahallah.</p>
            <p>FL 20 EGYPT</p>
            <p>Phone: +201025521486</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
