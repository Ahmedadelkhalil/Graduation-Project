import React from "react";

const Size = ({ onAddSize, onDelSize, activeSizes }) => {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <ul className="size-shop-sidebar">
      {sizes.map((size, indx) => (
        <li
          key={indx}
          className={`list-unstyled ${
            activeSizes.includes(size) ? "active-size" : ""
          }`}
        >
          <input
            type="checkbox"
            value={size}
            id={`${size}-size`}
            onChange={(e) =>
              e.target.checked
                ? onAddSize(e.target.value)
                : onDelSize(e.target.value)
            }
          />
          <label htmlFor={`${size}-size`}>{size.charAt(0)}</label>
        </li>
      ))}
    </ul>
  );
};

export default Size;
