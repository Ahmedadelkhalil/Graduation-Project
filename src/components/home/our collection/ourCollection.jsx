import React from "react";
import TopOurCollection from "./topOurCollection";
import BottomOurCollection from "./bottomOurCollection";

const OurCollection = ({ categories }) => {
  return (
    <div className="mt-5 py-3">
      <h3 className="o-c-t">our collection</h3>
      <TopOurCollection categories={categories} />
      <BottomOurCollection />
    </div>
  );
};

export default OurCollection;
