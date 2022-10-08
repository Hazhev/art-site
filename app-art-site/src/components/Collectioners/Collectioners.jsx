import React from "react";
import "../../Styles/Collectioners.css"
import CollectionersCard from "./CollectionersCard";

const Collectioners = () => {
    return(
        <div className="wrapper-collectioners">
            <div className="container-collectioners">
                <h1>Breadcrumbs</h1>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
            </div>
        </div>
    )
}

export default Collectioners;