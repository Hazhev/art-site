import React from "react";
import "../../Styles/Store.css";
import img from "../../image/auctions-img.png";
import investRating from "../../image/invest_rating.svg";
import LikeBtn from "../../image/favourite-store-art.svg";
import AddBtn from "../../image/add-btn.svg";

const StoreCard = () => {
  return (
    <div className="store-card">
      <img className="store-card-img" src={img} />
      <img className="store-invest-rating" src={investRating} />
      <div className="store-card-title">Лодка-водка</div>
      <div className="store-card-subtitle-line">
        <div className="store-card-subtitle-left">
          <div className="store-card-subtitle">
            Оригинал картины, 80 x 60 см
          </div>
          <div className="store-card-author">Виктор Пономаренко</div>
        </div>
        <img className="store-card-btn" src={LikeBtn} />
      </div>
      <div className="store-card-price-line">
        <div className="store-card-price">144 000 руб.</div>
        <img className="store-card-btn" src={AddBtn} />
      </div>
      <div className="store-card-btn-line">
        <img className="store-card-btn" src={LikeBtn} />
        <img className="store-card-btn" src={AddBtn} />
      </div>
    </div>
  );
};

export default StoreCard;
