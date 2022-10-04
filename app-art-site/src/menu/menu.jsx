import React from "react";
import './Menu.css'
import { Link, Links } from 'react-router-dom';

const Menu = ({ active, setActive}) => {
    return(
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="menu__content" onClick={e => e.stopPropagation()}>

                <Link to="/store" className="links-menu">Магазин</Link>
                <Link to="/artists" className="links-menu">Художники</Link>
                <Link to="/collections" className="links-menu">Коллекции</Link>
                <Link to="/auctions" className="links-menu">Аукционы</Link>
                <Link to="/events" className="links-menu events">Events</Link>
            </div>
        </div>
    );
};

export default Menu;