import React from "react";
import "../../Styles/Collections.css"
import ArtistsPhoto from '../../image/artists.png';

const CollectionsCard = () => {
    return(
        <div className="container-collectionsCard">
            <img src={ArtistsPhoto} alt="" />
            
        </div>
    )
}

export default CollectionsCard;