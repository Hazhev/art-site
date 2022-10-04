import React from "react";
import '../../Styles/Category.css'

const CategoryCard = (props) => {
    return(
        <div className="category-card" id={props.id}>
            <img src={props.image} alt="" />
            <button className="category-btn">{props.title}</button>
        </div>
    )
}

export default CategoryCard;