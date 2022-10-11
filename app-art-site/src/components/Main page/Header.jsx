import React, { useState } from "react";
import { Link, Links } from 'react-router-dom';
import '../../Styles/Header.css'
import logoMain from '../../image/logoMain.svg'
import iconSearch from '../../image/iconSearch.svg'
import iconHeart from '../../image/iconHeart.svg'
import iconShop from '../../image/iconShop.svg'
import Menu from "../../menu/menu";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    
    return(
        <div className="wrapper">
            <div className="container">
                <Link to="/" className="n">
                    <img src={logoMain} alt="Лого" id="logoMain"/>
                </Link>

                <div className="container-buttons">
                    <form className="form-search hide">
                        <input type='text' className="input-search" placeholder="Поиск"></input>
                        <button className="button iconSearch"><img src={iconSearch} alt=''/></button>
                    </form>

                    <button className="button iconHeart hide"><img src={iconHeart} alt=''/></button>
                    <button className="button iconShop hide"><img src={iconShop} alt=''/></button>

                    <div className="burger-nav">
                        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                            <span/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation-bar">
                <Link to="/store" className="navigation-links">Магазин</Link>
                <Link to="/collectioners" className="navigation-links">Коллекционеры</Link>
                {/* <Link to="/artists" className="navigation-links">Художники</Link>
                <Link to="/themes" className="navigation-links">Темы</Link> */}
                <Link to="/auctions" className="navigation-links">Аукционы</Link>
                <Link to="/events" className="navigation-links events">Events</Link>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} />
        </div>
    );
};

export default Header;