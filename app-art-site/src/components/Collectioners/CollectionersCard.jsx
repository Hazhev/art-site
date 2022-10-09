import React from "react";
import "../../Styles/Collectioners.css"
import ArtistsPhoto from '../../image/artists.png';
import fullCollection from '../../image/fullCollection.png';

const CollectionersCard = () => {
    return(
        <div className="container-collectionersCard">
            <div className="collectioners-img-btn">
                <img src={ArtistsPhoto} alt="" />
                <button className="collectioners-btn">Ван Гог</button>
            </div>
            <div className="text-collectionersCard">Мифопорождающее текстовое устройство начинает речевой акт. Метафора наблюдаема. Если архаический миф не знал противопоставления реальности тексту, субъективное восприятие притягивает подтекст, потому что сюжет и фабула различаются.</div>
        

            <div className="full-collection">
                <div className="narrowTopText collection">
                    полная <br />
                    коллекция
                </div>

                <div className="full-collection-photo">
                    <div className="full-collection-photo-sub">
                        <img src={fullCollection} alt="" />
                        <p>Лодка Водка</p>
                    </div>

                    <div className="full-collection-photo-sub">
                        <img src={fullCollection} alt="" />
                        <p>Лодка Водка</p>
                    </div>

                    <div className="full-collection-photo-sub">
                        <img src={fullCollection} alt="" />
                        <p>Лодка Водка</p>
                    </div>
                    
                </div>
                <button className="showMoreBtn">СМОТРЕТЬ БОЛЬШЕ</button>
            </div>
        </div>
    )
}

export default CollectionersCard;