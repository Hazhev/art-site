import React from "react";
import '../../Styles/Collectioners.css'
import CollectionersCard from "./CollectionersCard";

const Collectioners = () => {
    return(
        <div className="wrapper-collectioners">
            <p className="narrowTopText__mini">Коллекционеры</p>
            <div className="container-collectioners">
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
            </div>
            <button className="showMoreBtn">СМОТРЕТЬ БОЛЬШЕ</button>
        </div>
    )
}

export default Collectioners;