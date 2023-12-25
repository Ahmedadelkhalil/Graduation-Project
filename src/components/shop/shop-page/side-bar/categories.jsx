import React from "react";

const Categories = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <ul className="list-unstyled">
      {categories.map((category) => (
        <li
          key={category.id}
          className={`d-flex justify-content-between align-items-center cat-li-sideBar ${
            activeCategory === category.name ? "cat-li-sideBar-active" : ""
          }`}
          onClick={() => {
            onCategoryChange(category.name);
            // console.log(e.target);
          }}
        >
          <span className="cat-name">{category.name}</span>
          <span className="cat-amount">{category.amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
