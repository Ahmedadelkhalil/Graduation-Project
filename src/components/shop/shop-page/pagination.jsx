import React, { useState, useEffect } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ activePage, totalPages, handlePageChange }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pageArr = [];
    for (let i = 1; i <= totalPages; i++) {
      pageArr.push(i);
    }
    setPages(pageArr);
  }, [totalPages]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [activePage]);

  return (
    <div
      className={`${
        pages.length !== 0
          ? "show-nav pagination-container text-center mb-5"
          : "hide-pag"
      }`}
    >
      <button
        type="button"
        onClick={() => {
          if (activePage === 1) return;
          handlePageChange(activePage - 1);
        }}
        aria-label="prev-btn"
        disabled={activePage === 1 ? true : false}
        className={`${activePage === 1 ? "disabled" : ""}`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => {
            handlePageChange(page);
          }}
          className={`${activePage === page ? "active-pagination-btn" : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => {
          if (activePage === totalPages) return;
          handlePageChange(activePage + 1);
        }}
        aria-label="next-btn"
        disabled={activePage === totalPages ? true : false}
        className={`${activePage === totalPages ? "disabled" : ""}`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
