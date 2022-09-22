import React from "react";
import '../Styles/Header.css'
import logoMain from '../image/logoMain.svg'
import iconSearch from '../image/iconSearch.svg'
import iconHeart from '../image/iconHeart.svg'
import iconShop from '../image/iconShop.svg'

const Header = () => {
    return(
        <div className="wrapper">
            <div className="container">
                <img src={logoMain} alt="Лого" id="logoMain"/>

                <div className="container-buttons">
                    <form className="form-search">
                        <input type='text' className="input-search" placeholder="Поиск"></input>
                        <button className="button iconSearch"><img src={iconSearch} alt=''/></button>
                    </form>

                    <button className="button iconHeart"><img src={iconHeart} alt=''/></button>
                    <button className="button iconShop"><img src={iconShop} alt=''/></button>
                </div>
            </div>
            <div className="navigation-bar">
                <a className="navigation-links">Магазин</a>
                <a className="navigation-links">Художники</a>
                <a className="navigation-links">Коллекции</a>
                <a className="navigation-links">Аукционы</a>
                <a className="navigation-links events">Events</a>
            </div>
        </div>
    );
};

export default Header;