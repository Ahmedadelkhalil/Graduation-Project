import React, { useEffect, useLayoutEffect, useState } from "react";
import SectionHeader from "../../global/sectionHeader";
import Sidebar from "./side-bar/sidebar";
import { useLocation } from "react-router-dom";
import LayoutOptions from "./layoutOptions";
import SortOptions from "./sortOptions";
import ProductCardGrid from "../../global/productCardGrid";
import ProductCardList from "../productCardList";
import Pagination from "./pagination";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

// Animation Hook From Formkit For filtering & Sorting
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Shop = ({
  allProducts,
  categories,
  brands,
  wishlist,
  onAddToWishList,
  onAddToCart,
  onCompare,
  onQuickView,
  isLgScreen,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [shownData, setShownData] = useState([]);
  const [activeSorting, setActiveSorting] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const numOfProductPerPage = 9;
  const [filteredData, setFilteredData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [activePriceRange, setActivePriceRange] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);
  const { state } = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeLayOut, setActiveLayout] = useState("grid");
  const [parentAnimation] = useAutoAnimate({ duration: 500 });

  // START GI Fun
  const displayProducts = (pageNum = activePage, data = filteredData) => {
    const start = numOfProductPerPage * (pageNum - 1);
    const end = numOfProductPerPage * pageNum;
    const dataNeededToShow = data?.slice(start, end);
    handlingSorting(activeSorting, dataNeededToShow);
  };
  const pagination = (data) => {
    const calcNop = Math.ceil(data.length / numOfProductPerPage);
    setTotalPages(calcNop);
  };
  const handlePageChange = (pageNum) => {
    setActivePage(pageNum);
    displayProducts(pageNum);
  };
  const handleDataChange = (newData) => {
    setFilteredData(newData);
    setActivePage(1);
    displayProducts(1, newData);
    pagination(newData);
  };

  // END GI Fun

  // For Showing All Products By Default Once Rendering Shop Com
  useLayoutEffect(() => {
    handleDataChange(allProducts);
    setCategoryData(allProducts);
  }, [allProducts]);
  // For Showing All Products By Default Once Rendering Shop Com

  // Start Category Filter Fun
  const onCategoryChange = (category) => {
    let data;
    if (category === "All") {
      data = allProducts;
    } else {
      data = allProducts.filter((product) => product.category === category);
    }
    setCategoryData(data);
    setActiveCategory(category);
    const filterBasedOnSize = filterSize(data, activeSizes);
    const filterBasedOnBrand = filterBrand(filterBasedOnSize, activeBrands);
    const filterBasedOnPrice = priceFilter(
      filterBasedOnBrand,
      activePriceRange
    );
    handleDataChange(filterBasedOnPrice);
  };
  // End Category Filter Fun

  // START FILTER PRICE FUN
  const priceAfetrDiscount = (oldPrice, discount = 0) => {
    return oldPrice - discount;
  };

  const priceFilter = (data, value) => {
    let newData;
    if (value.length === 0) {
      newData = data;
    } else {
      newData = [...data].filter((product) => {
        const productPriceAfterDis = priceAfetrDiscount(
          product.price,
          product.discount
        );
        return productPriceAfterDis >= value[0] &&
          productPriceAfterDis <= value[1]
          ? product
          : null;
      });
    }
    return newData;
  };

  const onPriceChange = (value) => {
    setActivePriceRange(value);
    const filtered = priceFilter(categoryData, activePriceRange);
    const filterBasedOnSize = filterSize(filtered, activeSizes);
    const filterBasedOnBrand = filterBrand(filterBasedOnSize, activeBrands);
    handleDataChange(filterBasedOnBrand);
  };
  // END FILTER PRICE FUN

  // START FILTER SIZE FUN
  const filterSize = (data, newSizes) => {
    let newData;
    if (newSizes.length === 0) {
      newData = data;
    } else {
      newData = data.filter((product) => {
        let pass = false;
        for (let i = 0; i < newSizes.length; i++) {
          if (product.size.indexOf(newSizes[i].charAt(0)) !== -1) {
            pass = true;
            break;
          }
        }
        return pass ? product : null;
      });
    }
    return newData;
  };
  const onSizeChange = (newSizes) => {
    const filtered = filterSize(categoryData, newSizes);
    const filteredBasedOnBrand = filterBrand(filtered, activeBrands);
    const filteredBasedOnPrice = priceFilter(
      filteredBasedOnBrand,
      activePriceRange
    );
    handleDataChange(filteredBasedOnPrice);
  };
  const onAddSizes = (size) => {
    const sizes = activeSizes;
    sizes.push(size);
    setActiveSizes(sizes);
    onSizeChange(sizes);
  };
  const onDelSizes = (size) => {
    const sizes = activeSizes;
    const indx = activeSizes.indexOf(size);
    sizes.splice(indx, 1);
    setActiveSizes(sizes);
    onSizeChange(sizes);
  };
  // END FILTER SIZE FUN

  // START BRAND FILTER FUN
  const filterBrand = (data, newBrands) => {
    let newData;
    if (newBrands.length === 0) {
      newData = data;
    } else {
      newData = data.filter((product) => {
        return newBrands.indexOf(product.brand) !== -1 ? product : null;
      });
    }
    return newData;
  };

  const onBrandChange = (newBrands) => {
    const filtered = filterBrand(categoryData, newBrands);
    const filteredBasedOnSize = filterSize(filtered, activeSizes);
    const filteredBasedOnPrice = priceFilter(
      filteredBasedOnSize,
      activePriceRange
    );
    handleDataChange(filteredBasedOnPrice);
  };

  const onBrandAdd = (brand) => {
    const brands = activeBrands;
    brands.push(brand);
    setActiveBrands(brands);
    onBrandChange(brands);
  };
  const onDelBrand = (brand) => {
    const brands = activeBrands;
    const indx = brands.indexOf(brand);
    brands.splice(indx, 1);
    setActiveBrands(brands);
    onBrandChange(brands);
  };
  // END BRAND FILTER FUN

  // START HANDLING SORTING

  const handlingSorting = (id, data = shownData) => {
    let sortedData;
    switch (id) {
      case 1: {
        sortedData = sortingPrice("up", data);
        break;
      }
      case 2: {
        sortedData = sortingPrice("down", data);
        break;
      }
      case 3: {
        sortedData = sortingRating(data);
        break;
      }
      case 4: {
        sortedData = sortingPopularity(data);
        break;
      }
      default: {
        sortedData = sortingDefault(data);
        break;
      }
    }
    setShownData(sortedData);
    setActiveSorting(id);
  };

  const sortingPrice = (method, data) => {
    const sorted = [...data].sort((x, y) => {
      const netPriceOfProXafterDiscount = priceAfetrDiscount(
        x.price,
        x.discount
      );
      const netPriceOfProYafterDiscount = priceAfetrDiscount(
        y.price,
        y.discount
      );
      return method === "up"
        ? netPriceOfProXafterDiscount - netPriceOfProYafterDiscount
        : netPriceOfProYafterDiscount - netPriceOfProXafterDiscount;
    });
    return sorted;
  };

  const sortingRating = (data) => {
    const sorted = [...data].sort((x, y) => {
      return y.stars - x.stars;
    });
    return sorted;
  };

  const calcPopularity = (tags) => {
    let sum = 0;
    tags.forEach((tag) => {
      if (tag === "Hot") sum += 2;
      if (tag === "Trend") sum += 1;
    });
    return sum;
  };

  const sortingPopularity = (data) => {
    const sorted = [...data].sort((x, y) => {
      const popx = calcPopularity(x.tags);
      const popy = calcPopularity(y.tags);
      return popy - popx;
    });
    return sorted;
  };

  const sortingDefault = (data) => {
    const sorted = [...data].sort((x, y) => {
      return x.id - y.id;
    });
    return sorted;
  };
  // END HANDLING SORTING
  // START GETTING STATE INFO IF FOUND
  useEffect(() => {
    if (state) {
      const categoryName = state.from;
      onCategoryChange(categoryName);
    }
  }, [state]);
  // END GETTING STATE INFO IF FOUND
  // START HANDLING LAYOUT FUN
  const handleLayout = (layout) => {
    setActiveLayout(layout);
  };
  // END HANDLING LAYOUT FUN

  return (
    <>
      <div>
        <SectionHeader
          page="shop"
          pageLink="shop"
          category={
            activeCategory === "All" ? "All Categories" : activeCategory
          }
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <Sidebar
              allProducts={allProducts}
              brands={brands}
              onPriceChange={onPriceChange}
              onAddSize={onAddSizes}
              onDelSize={onDelSizes}
              onAddBrands={onBrandAdd}
              onDelBrands={onDelBrand}
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
              showSideBar={showSideBar}
              HideSideBar={() => setShowSideBar(false)}
              activeSizes={activeSizes}
              activeBrands={activeBrands}
            />
            <div className="container-fluid mb-5 d-flex justify-content-between align-items-center">
              <button
                onClick={() => setShowSideBar(true)}
                className="filter-btn"
              >
                <FontAwesomeIcon icon={faSliders} />
              </button>
              <div className="product-show-style">
                <LayoutOptions
                  activeLayOut={activeLayOut}
                  handleLayout={handleLayout}
                />
              </div>
              <div className="product-sorting-dropdown">
                <SortOptions
                  activeSorting={activeSorting}
                  handlingSorting={handlingSorting}
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <div className="view-sorting-holder">
              <div className="product-show-style-md">
                <LayoutOptions
                  activeLayOut={activeLayOut}
                  handleLayout={handleLayout}
                />
              </div>
              <div className="product-sorting-dropdown-md">
                <SortOptions
                  activeSorting={activeSorting}
                  handlingSorting={handlingSorting}
                />
              </div>
            </div>
            <div className="container-fluid p-0 m-0 mt-4 min-height-custome">
              {categoryData.length !== 0 ? (
                filteredData.length !== 0 ? (
                  <div
                    className={
                      activeLayOut === "grid"
                        ? "grid-shop-cus"
                        : "list-shop-cus"
                    }
                    ref={parentAnimation}
                  >
                    {shownData.map((product) => {
                      let inWishList;
                      if (wishlist) {
                        inWishList =
                          wishlist.findIndex(
                            (item) => item.id === product.id
                          ) !== -1
                            ? true
                            : false;
                      }
                      return activeLayOut === "grid" ? (
                        <div>
                          <ProductCardGrid
                            product={product}
                            onAddToCart={onAddToCart}
                            onAddToWishList={onAddToWishList}
                            onCompare={onCompare}
                            onQuickView={onQuickView}
                            isLgScreen={isLgScreen}
                            inWishList={inWishList}
                          />
                        </div>
                      ) : (
                        <div>
                          <ProductCardList
                            product={product}
                            onAddToCart={onAddToCart}
                            onAddToWishList={onAddToWishList}
                            onCompare={onCompare}
                            isLgScreen={isLgScreen}
                            inWishList={inWishList}
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-center no-items-found-shop">
                    Sorry, There Are No Items To Show Based On Your Filters
                  </p>
                )
              ) : (
                ""
              )}
            </div>
            <div>
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
