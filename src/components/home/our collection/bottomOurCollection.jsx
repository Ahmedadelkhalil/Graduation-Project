import React from "react";

import feature1 from "../../../assets/our-collection/feature1.jpg";
import feature2 from "../../../assets/our-collection/feature2.jpg";
import feature3 from "../../../assets/our-collection/feature3.jpg";

import { NavLink } from "react-router-dom";

const BottomOurCollection = () => {
  return (
    <div className="container-fluid row bottom-our-collection py-5 m-0">
      <div className="col-md-4 hover-ani mb-sm-5">
        <div className="scale-ani-holder rounded">
          <NavLink to="/shop">
            <img src={feature1} alt="feature-1" className="w-100 rounded" />
          </NavLink>
        </div>

        <NavLink to="/shop">
          <h3 className="mb-3 mt-4">Sink into Luxe</h3>
        </NavLink>
        <p>Statement-making, while keeping a low profile.</p>
      </div>

      <div className="col-md-4 hover-ani mb-sm-5">
        <div className="scale-ani-holder rounded">
          <NavLink to="/shop">
            <img src={feature2} alt="feature-2" className="w-100 rounded" />
          </NavLink>
        </div>
        <NavLink to="/shop">
          <h3 className="mb-3 mt-4">Sitting Pretty</h3>
        </NavLink>
        <p>There’s always room for one more guest.</p>
      </div>

      <div className="col-md-4 hover-ani mb-sm-5">
        <div className="scale-ani-holder rounded">
          <NavLink to="/shop">
            <img src={feature3} alt="feature-3" className="w-100 rounded" />
          </NavLink>
        </div>
        <NavLink to="/shop">
          <h3 className="mb-3 mt-4">Modern Curves</h3>
        </NavLink>
        <p>A curvaceous approach that covers all the bases.</p>
      </div>
    </div>
  );
};

export default BottomOurCollection;
