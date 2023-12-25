import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import CompareTable from "./compareTable";

const CompareProductsModal = ({
  compareProducts,
  removeFromCompare,
  addingToCart,
  wishlist,
}) => {
  return (
    <div className="qv-modal-container">
      <div
        className="modal fade"
        id="comProductsModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="compare Products"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen"
          role="document"
        >
          <div className="modal-content m-5 position-relative ">
            <button
              type="button"
              data-bs-dismiss="modal"
              className="comProCloseBtn position-absolute"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <CompareTable
              compareProducts={compareProducts}
              removeFromCompare={removeFromCompare}
              addingToCart={addingToCart}
              wishlist={wishlist}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProductsModal;
// comProductsModal
