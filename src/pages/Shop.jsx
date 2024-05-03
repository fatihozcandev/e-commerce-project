import React from "react";
import DesktopCloths from "../components/shopPageComponents/DesktopCloths";
import FilterSide from "../components/shopPageComponents/FilterSide";
import CategoryList from "../components/shopPageComponents/CategoryList";
import Sponsors from "../components/Sponsors";

function Shop() {
  return (
    <div>
      <DesktopCloths />
      <FilterSide />
      <CategoryList />
      <Sponsors />
    </div>
  );
}

export default Shop;
