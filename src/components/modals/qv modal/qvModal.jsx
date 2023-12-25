import React from "react";
import QvCarousel from "./QV-carousel/qvCarousel";
import QvProDetails from "./QV Product Details/qvProDetails";

const QvModal = ({ product, addingToCart, wishlist }) => {
  return (
    <div className="qv-modal-container">
      <div
        className="modal fade"
        id="qvModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content modal-content-cus">
            <div className="modal-body row p-0">
              <div className="col-6">
                <QvCarousel product={product} />
              </div>
              <div className="col-6 p-5">
                <QvProDetails
                  product={product}
                  addingToCart={addingToCart}
                  wishlist={wishlist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QvModal;
