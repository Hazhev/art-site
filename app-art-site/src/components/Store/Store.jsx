import React from "react";
import "../../Styles/Store.css";
import StoreCard from "./StoreCard.jsx";
import LeftArrow from "../../image/left-arrow.svg";
import Filters from "../Filters";
import Breadcrumbs from "../Breadcrumbs";

const Store = () => {
  const [openFilters, setOpenFilters] = React.useState(false);

  const array = [1, 1, 1, 1, 1, 1];

  const toggleFilters = () => {
    setOpenFilters(!openFilters);
  };

  return (
    <div className="store-wrapper">
      <Breadcrumbs/>
      {openFilters && <Filters closeFilters={toggleFilters}/>}

      <div className="store-title-line">
        <div className="store-title">Оригиналы</div>
        <div
          className="store-filters-container"
          onClick={() => toggleFilters()}
        >
          <img src={LeftArrow} className="store-filter-img" />
          <div className="store-filter-title">Фильтры</div>
        </div>
      </div>
      <div className="separate-line" />
      <div className="store-container">
        {array.map((e, i) => (
          <StoreCard />
        ))}
      </div>
    </div>
  );
};

export default Store;
