import React from "react";
import { NavLink } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Page404 = () => {
  return (
    <section className="container-fluid page-404">
      <div className="not-found-page-top">
        <h1>404</h1>
        <h2>Oops! That page can't be found.</h2>
      </div>
      <div className="not-found-page-bottom">
        <p>
          We're really sorry but we can't seem to find the page you were looking
          for.
        </p>
        <NavLink to="/">
          <button type="button">
            back the homepage <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Page404;
