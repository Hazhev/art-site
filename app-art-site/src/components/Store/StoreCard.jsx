import React from "react";
import "../../Styles/Store.css";
import img from "../../image/auctions-img.png";

const StoreCard = () => {
  return (
    <div className="store-card">
      <img className="store-img" src={img} />
    </div>
  );
};

export default StoreCard;
