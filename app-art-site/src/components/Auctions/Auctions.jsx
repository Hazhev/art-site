import React from "react";
import "../../Styles/Auctions.css";
import AuctionsCard from "./AutcionsCard";

const Auctions = () => {
  let array = [1, 1, 1, 1, 1, 1];
  return (
    <div className="auctions-wrapper">
      <div className="auctions-title">Аукцион</div>
      <div className="separate-line"></div>
      <div className="auctions-container">
        {array.map((e, i) => (
          <AuctionsCard />
        ))}
      </div>
    </div>
  );
};

export default Auctions;
