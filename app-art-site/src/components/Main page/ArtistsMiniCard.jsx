import React from "react";
import '../../Styles/ArtistsMini.css'


const ArtistsMiniCard = (props) => {
    return(
        <div className="container-artistsMiniCard">
            <img src={props.image} alt="" />
            <button className="category-btn">{props.title}</button>
        </div>
    )
}

export default ArtistsMiniCard;