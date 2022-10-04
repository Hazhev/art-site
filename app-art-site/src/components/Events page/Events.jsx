import React from "react";
import '../../Styles/Events.css'
import PostEvent from "./PostEvent";

const Events = () => {
    return(
        <div className="wrapper-events">
            <div className="container-events">
                <h1>Breabcrumbs</h1>
                <PostEvent/>
                <PostEvent/>
            </div>
        </div>
    )
}

export default Events;