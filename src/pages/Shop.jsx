import React from "react";
import DesktopCloths from "../components/shopPageComponents/DesktopCloths";
import FilterSide from "../components/shopPageComponents/FilterSide";
import CategoryList from "../components/shopPageComponents/CategoryList";

function Shop() {
  return (
    <div>
      <DesktopCloths />
      <FilterSide />
      <CategoryList />
    </div>
  );
}

export default Shop;
