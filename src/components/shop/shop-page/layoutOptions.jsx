import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

// Imported assets
import gridIcon from "../../../assets/icons/grid-icon.svg";

const LayoutOptions = ({ activeLayOut, handleLayout }) => {
  return (
    <ul className="list-unstyled layout-btns d-flex mb-0">
      <li>
        <button
          onClick={() => handleLayout("grid")}
          className={`${activeLayOut === "grid" ? "active-layout" : ""}`}
        >
          <img src={gridIcon} alt="" />
        </button>
      </li>
      <li>
        <button
          onClick={() => handleLayout("list")}
          className={`${activeLayOut === "list" ? "active-layout" : ""}`}
        >
          <FontAwesomeIcon icon={faList} />
        </button>
      </li>
    </ul>
  );
};

export default LayoutOptions;
