import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import icon from "../../assets/icons/search-icon.svg";

const SearchModal = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="searchModal-container">
      <div
        className="modal fade"
        id="searchProductsModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="searchProductsModal"
        aria-hidden="true"
      >
        <div className="modal-dialog m-0" role="document">
          <div className="modal-content border-0">
            <div className="modal-header border-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <img src={icon} alt="search-icon" className="col-2" />
                <input
                  type="text"
                  className="col-8"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span
                  className={`col-2 ${search.length > 0 ? "show" : ""}`}
                  onClick={() => setSearch("")}
                >
                  cancel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
