import React, { useState } from "react";

const Carousel = ({ product }) => {
  const [activeimgSlider, setActiveImgSlider] = useState(0);
  const [firstImgActive, setFirstImgActive] = useState(true);
  const [secondImgActive, setSecondImgActive] = useState(false);

  const handleImgPaginationPrevBtn = () => {
    if (activeimgSlider === 1 ? setActiveImgSlider(0) : setActiveImgSlider(1));
    setFirstImgActive(!firstImgActive);
    setSecondImgActive(!secondImgActive);
  };

  const handleImgPaginationNextBtn = () => {
    if (activeimgSlider === 0 ? setActiveImgSlider(1) : setActiveImgSlider(0));
    setFirstImgActive(!firstImgActive);
    setSecondImgActive(!secondImgActive);
  };

  return (
    <div className="row main-slider-container">
      <div className="col-sm-12 col-md-3 col-lg-3 text-center container-of-product-details-small-left-imgs mt-sm-2 mt-md-0">
        {/* SMALL PICS */}
        <img
          src={product.imgs ? product.imgs[0].src : null}
          alt={`1img of ${product.name} product`}
          className={`w-100 product-details-small-left-imgs m-2 m-md-0 ${
            firstImgActive ? "fi-active" : ""
          }`}
          onClick={() => {
            setActiveImgSlider(0);
            setFirstImgActive(!firstImgActive);
            setSecondImgActive(!secondImgActive);
          }}
        />
        <img
          src={product.imgs ? product.imgs[1].src : null}
          alt={`2img of ${product.name} product`}
          className={`w-100 product-details-small-left-imgs m-2 m-md-2 ${
            secondImgActive ? "si-active" : ""
          }`}
          onClick={() => {
            setActiveImgSlider(1);
            setFirstImgActive(!firstImgActive);
            setSecondImgActive(!secondImgActive);
          }}
        />
      </div>
      <div className="col-sm-12 col-md-9 col-lg-9 text-center">
        <div id="largeimg" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={
                  product.imgs
                    ? product.imgs[activeimgSlider === 0 ? 0 : 1].src
                    : null
                }
                alt="main-large-img"
                className="w-100"
              />
            </div>
          </div>
          <button
            className={`carousel-control-prev`}
            type="button"
            data-bs-target="#largeimg"
            data-bs-slide="prev"
            onClick={handleImgPaginationPrevBtn}
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#largeimg"
            data-bs-slide="next"
            onClick={handleImgPaginationNextBtn}
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
