import React from "react";
import '../../Styles/Events.css'
import eventsImg from '../../image/eventsImg.png';

const PostEvent = () => {
    return(
        <div className="event-post">
            <div className="event-text-top">
                <div className="event-text-name">"Лодка Водка"</div>
                <div className="event-text-grey">19 сентября 2022</div>
            </div>
            
            <img src={eventsImg} alt="" />

            <div className="events-text-description">Мифопорождающее текстовое устройство начинает речевой акт. Метафора наблюдаема. Если архаический миф не знал противопоставления реальности тексту, субъективное восприятие притягивает подтекст, потому что сюжет и фабула различаются.
            <br/><br/>Мифопорождающее текстовое устройство начинает речевой акт. Метафора наблюдаема. Если архаический миф не знал противопоставления реальности тексту, субъективное восприятие притягивает подтекст, потому что сюжет и фабула различаются.</div>

            <button>напомнить о событии</button>
        </div>
    )
}

export default PostEvent;