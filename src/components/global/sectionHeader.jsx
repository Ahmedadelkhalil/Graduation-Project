import React from "react";
import { NavLink } from "react-router-dom";

const SectionHeader = ({ page, pageLink, category }) => {
  return (
    <header>
      <div className="container-fluid section-header">
        <h1 className="text-dark">{page === "shop" ? category : page}</h1>
        <div className="paths">
          <NavLink to="/" className="text-secondary">
            Home
          </NavLink>
          <span className="text-secondary">/</span>
          <NavLink
            to={`/${pageLink}`}
            state={pageLink === "shop" ? { from: "All" } : null}
            className={`${category ? "text-secondary" : "text-dark"}`}
          >
            {page}
          </NavLink>
          {category ? (
            <>
              <span className="text-secondary">/</span>
              <span className="text-dark">{category}</span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
