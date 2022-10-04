import React from "react";
import '../../Styles/Collectioners.css'
import Collectioner from '../../image/collectioner.png'

const CollectionersCard = () => {
    return(
        <div className="collectioners-card">
            <img src={Collectioner} alt="" />

            <div className="collectioners-card-sub">
                <p>Виктор Плюшка</p>
                <p id="ten-arts">10 картин</p>
            </div>
        </div>
    )
}

export default CollectionersCard;