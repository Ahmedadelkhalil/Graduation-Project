import React from "react";
import searchImg from "../../assets/icons/search-icon.svg";

const Search = () => {
  return (
    <button
      type="button"
      className="btn border-0 p-0 text-dark"
      data-bs-toggle="modal"
      data-bs-target="#searchProductsModal"
      aria-label="Search For Products"
    >
      <img src={searchImg} alt="searchIcon-Img" />
    </button>
  );
};

export default Search;
