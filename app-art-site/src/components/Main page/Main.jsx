import React from "react";
import '../../Styles/Main.css'
import Slider2 from "./Slider2";
import TopWeek from "./TopWeek";

const Main = () => {
    return(
        <div className="main">
            <div className="container-main">
                <Slider2/>
                <TopWeek/>
            </div>
        </div>
    )
}

export default Main;