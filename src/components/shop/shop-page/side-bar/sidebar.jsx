import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Categories from "./categories";
import Price from "./price";
import Size from "./size";
import Brands from "./brands";

const Sidebar = ({
  brands,
  onPriceChange,
  onAddSize,
  onDelSize,
  onAddBrands,
  onDelBrands,
  categories,
  activeCategory,
  onCategoryChange,
  showSideBar,
  HideSideBar,
  activeSizes,
  activeBrands,
}) => {
  return (
    <div className={showSideBar ? "show-shop-sidebar" : "hide-shop-sidebar"}>
      {showSideBar ? (
        <button
          type="button"
          onClick={HideSideBar}
          className="close-sidebar-shop-btn"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      ) : (
        ""
      )}
      <div>
        <h2 className="cat-title-sideBar">CATEGORIES</h2>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <div className="mt-5">
        <h2 className="price-title-sideBar">PRICE</h2>
        <Price onPriceChange={onPriceChange} />
      </div>
      <div className="mt-5">
        <h2 className="size-title-sideBar">SIZE</h2>
        <Size
          onAddSize={onAddSize}
          onDelSize={onDelSize}
          activeSizes={activeSizes}
        />
      </div>
      <div className="mt-5">
        <h2 className="brand-title-sideBar">BRANDS</h2>
        <Brands
          brands={brands}
          onAddBrands={onAddBrands}
          onDelBrands={onDelBrands}
          activeBrands={activeBrands}
        />
      </div>
    </div>
  );
};

export default Sidebar;
