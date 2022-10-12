import React from "react";
import '../../Styles/Events.css'
import Breadcrumbs from "../Breadcrumbs";
import PostEvent from "./PostEvent";

const Events = () => {
    return(
        <div className="wrapper-events">
            <div className="container-events">
                <Breadcrumbs/>
                
                <PostEvent/>
                <PostEvent/>
            </div>
        </div>
    )
}

export default Events;