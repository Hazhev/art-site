import React from "react";
import '../../Styles/TopWeek.css'
import topWeekPhoto from '../../image/topWeek.png'

const TopWeek = () => {
    return(
        <div className="container-topweek">
            <div className="topweek-text">
                <p>
                    ТОП <br/>
                    НЕДЕЛИ
                </p>
                <button>СМОТРЕТЬ БОЛЬШЕ</button>
            </div>

            <div className="topweek-photo">
                <img src={topWeekPhoto} alt="" />
                <img src={topWeekPhoto} alt="" />
                <img src={topWeekPhoto} alt="" />
            </div>
        </div>
    )
}

export default TopWeek;