import React, { useState } from "react";

const Price = ({ onPriceChange }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);

  const updatingProductsBasedOnPrice = (e) => {
    setMinValue(e.target.value);
    onPriceChange([minValue, maxValue]);
  };
  return (
    <div className="text-center">
      <input
        type="range"
        min={0}
        max={500}
        step={10}
        value={minValue}
        onChange={updatingProductsBasedOnPrice}
        className="priceRange-sideBar"
      />
    </div>
  );
};

export default Price;
