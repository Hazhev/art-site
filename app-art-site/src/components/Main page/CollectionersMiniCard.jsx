import React from "react";
import '../../Styles/CollectionersMini.css'
import Collectioner from '../../image/collectioner.png'

const CollectionersCard = () => {
    return(
        <div className="collectionersMini-card">
            <img src={Collectioner} alt="" />

            <div className="collectionersMini-card-sub">
                <p>Виктор Плюшка</p>
                <p id="ten-arts">10 картин</p>
            </div>
        </div>
    )
}

export default CollectionersCard;