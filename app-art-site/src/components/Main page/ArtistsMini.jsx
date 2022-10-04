import React from "react";
import '../../Styles/ArtistsMini.css'
import ArtistsPhoto from '../../image/artists.png';
import ArtistsMiniCard from "./ArtistsMiniCard";

const ArtistsMini = () => {
    return(
        <div className="container-artistsMini">
            <p className="narrowTopText">Художники</p>
            <div className="container-artistsMini-photo">
                <ArtistsMiniCard image={ArtistsPhoto} title='Ван Гог'/>
                <ArtistsMiniCard image={ArtistsPhoto} title='Ван Гог'/>
                <ArtistsMiniCard image={ArtistsPhoto} title='Ван Гог'/>
                <ArtistsMiniCard image={ArtistsPhoto} title='Ван Гог'/>
            </div>
            <button className="showMoreBtn">СМОТРЕТЬ БОЛЬШЕ</button>
        </div>
    )
}

export default ArtistsMini;