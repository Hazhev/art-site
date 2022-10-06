import React from "react";
import "../../Styles/Collections.css"
import CollectionsCard from "./CollectionsCard";

const Collections = () => {
    return(
        <div className="wrapper-collections">
            <div className="container-collections">
                <h1>Breadcrumbs</h1>
                <CollectionsCard/>
            </div>
        </div>
    )
}

export default Collections;