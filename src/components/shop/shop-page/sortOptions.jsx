import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpLong,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

const SortOptions = ({ activeSorting, handlingSorting }) => {
  const sortingData = [
    { id: 0, sort: "Default Sorting", Arrow: false },
    { id: 1, sort: "Price", Arrow: "up" },
    { id: 2, sort: "Price", Arrow: "down" },
    { id: 3, sort: "Rating", Arrow: "down" },
    { id: 4, sort: "Popularity", Arrow: "down" },
  ];
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle dropdown-main-btn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="sortingDropdown"
      >
        <span>{sortingData[activeSorting].sort}</span>
        <span>
          {sortingData[activeSorting].Arrow ? (
            sortingData[activeSorting].Arrow === "up" ? (
              <FontAwesomeIcon icon={faArrowUpLong} />
            ) : (
              <FontAwesomeIcon icon={faArrowDownLong} />
            )
          ) : (
            ""
          )}
        </span>
      </button>
      <ul
        className="list-unstyled dropdown-menu sort-dropDown-menu"
        aria-labelledby="sortingDropdown"
      >
        {sortingData.map((sortType) => {
          return !sortType.Arrow ? (
            <li key={sortType.id}>
              {" "}
              <button
                className={`dropdown-item ${
                  activeSorting === sortType.id ? "active-dropDown-sort" : ""
                }`}
                onClick={() => handlingSorting(sortType.id)}
              >
                {sortType.sort}
              </button>
            </li>
          ) : sortType.Arrow === "up" ? (
            <li key={sortType.id}>
              <button
                className={`dropdown-item d-flex align-items-center justify-content-start ${
                  activeSorting === sortType.id ? "active-dropDown-sort" : ""
                }`}
                onClick={() => handlingSorting(sortType.id)}
              >
                <span>{`Sort By ${sortType.sort}`}</span>
                <span>
                  <FontAwesomeIcon icon={faArrowUpLong} />
                </span>
              </button>
            </li>
          ) : (
            <li key={sortType.id}>
              <button
                className={`dropdown-item d-flex align-items-center justify-content-start ${
                  activeSorting === sortType.id ? "active-dropDown-sort" : ""
                }`}
                onClick={() => handlingSorting(sortType.id)}
              >
                <span>{`Sort By ${sortType.sort}`} </span>
                <span>
                  <FontAwesomeIcon icon={faArrowDownLong} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortOptions;
