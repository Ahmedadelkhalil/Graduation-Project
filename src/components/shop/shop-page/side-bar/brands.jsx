import React from "react";

const Brands = ({ brands, onAddBrands, onDelBrands, activeBrands }) => {
  return (
    <ul className="list-unstyled brand-shop-sidebar">
      {brands.map((brand) => (
        <li
          key={brand.id}
          className={`${
            activeBrands.includes(brand.name) ? "brand-shop-sidebar-active" : ""
          }`}
        >
          <input
            type="checkbox"
            value={brand.name}
            id={`${brand.name}-brand`}
            onChange={(e) =>
              e.target.checked
                ? onAddBrands(e.target.value)
                : onDelBrands(e.target.value)
            }
          />
          <label htmlFor={`${brand.name}-brand`}>
            <img src={brand.img} alt={brand.name} className="w-100" />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Brands;
