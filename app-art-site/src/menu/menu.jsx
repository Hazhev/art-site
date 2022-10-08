import React from "react";
import "./Menu.css";
import { Link, Links } from "react-router-dom";

const Menu = ({ active, setActive }) => {
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="menu__content">
        <Link
          to="/store"
          className="links-menu"
          onClick={() => setActive(false)}
        >
          Магазин
        </Link>
        <Link
          to="/artists"
          className="links-menu"
          onClick={() => setActive(false)}
        >
          Художники
        </Link>
        <Link
          to="/collections"
          className="links-menu"
          onClick={() => setActive(false)}
        >
          Коллекции
        </Link>
        <Link
          to="/auctions"
          className="links-menu"
          onClick={() => setActive(false)}
        >
          Аукционы
        </Link>
        <Link
          to="/events"
          className="links-menu events"
          onClick={() => setActive(false)}
        >
          Events
        </Link>
      </div>
    </div>
  );
};

export default Menu;
