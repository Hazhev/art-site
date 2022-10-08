import React from "react";
import '../../Styles/CollectionersMini.css'
import CollectionersCard from "./CollectionersMiniCard";
import { useNavigate } from "react-router-dom"

const CollectionersMini = () => {
    const navigate = useNavigate();
    return(
        <div className="wrapper-collectionersMini">
            <p className="narrowTopText__mini">Коллекционеры</p>
            <div className="container-collectionersMini">
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
            <button className="showMoreBtn" onClick={() => navigate("/collectioners")}>СМОТРЕТЬ БОЛЬШЕ</button>
        </div>
    )
}

export default CollectionersMini;