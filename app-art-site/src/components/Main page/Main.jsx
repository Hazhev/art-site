import React from "react";
import '../../Styles/Main.css'
import ArtistsMini from "./ArtistsMini";
import Category from "./Category";
import CollectionersMini from "./CollectionersMini";
import Slider2 from "./Slider2";
import TopWeek from "./TopWeek";

const Main = () => {
    return(
        <div className="main">
            <div className="container-main">
                <Slider2/>
                <TopWeek/>
                <div className="subcontainer-main">
                    <Category/>
                    <CollectionersMini/>
                </div>
                <ArtistsMini/>
            </div>
        </div>
    )
}

export default Main;