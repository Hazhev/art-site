import React from "react";
import "../../Styles/Auctions.css";
import img from "../../image/auctions-img.png";
import bet from "../../image/auctions-card-info-bet.svg";
import blicPrice from "../../image/auctions-card-info-blic-price.svg";
import time from "../../image/auctions-card-info-time.svg";

const AuctionsCard = () => {
  const today = new Date();
  return (
    <div className="auctions-card">
      <img className="auctions-card-img" src={img} />
      <div className="auctions-card-title-line">
        <div className="auctions-card-title">Лодка-водка</div>
        <div className="auctions-card-subtitle">Иван Непетов</div>
      </div>
      <div className="auctions-card-info-container">
        <div className="auctions-card-title-mobile">
          <div className="auctions-card-title">Лодка-водка</div>
          <div className="auctions-card-subtitle">Иван Непетов</div>
        </div>
        <div className="auctions-card-info-line">
          <div className="auctions-card-info-left">13 000 руб.</div>
          <div className="auctions-card-info-bet-container">
            <img src={bet} className="auctions-card-info-img" />
            <div className="auctions-card-info-bet">1 ставка</div>
          </div>
        </div>
        <div className="auctions-card-info-line">
          <div className="auctions-card-info-left">15 000 руб.</div>
          <div className="auctions-card-info-bet-container">
            <img src={blicPrice} className="auctions-card-info-img" />
            <div className="auctions-card-info-blic-price">Блиц-цена</div>
          </div>
        </div>
        <div className="auctions-card-info-line">
          <div className="auctions-card-info-left">
            {today.toLocaleTimeString()} ч.
          </div>
          <div className="auctions-card-info-bet-container">
            <img src={time} className="auctions-card-info-img" />
            <div className="auctions-card-info-time">1 ставка</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionsCard;
