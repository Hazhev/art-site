import React from "react";
import "../../Styles/Collectioners.css"
import Breadcrumbs from "../Breadcrumbs";
import CollectionersCard from "./CollectionersCard";

const Collectioners = () => {
    return(
        <div className="wrapper-collectioners">
            <div className="container-collectioners">
                <Breadcrumbs/>
                <CollectionersCard/>
                <CollectionersCard/>
                <CollectionersCard/>
            </div>
        </div>
    )
}

export default Collectioners;