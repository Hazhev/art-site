import React from "react";
import '../../Styles/Category.css'
import art_1 from '../../image/art_1.png'
import art_2 from '../../image/art_2.png'
import art_3 from '../../image/art_3.png'
import art_4 from '../../image/art_4.png'
import art_5 from '../../image/art_5.png'
import CategoryCard from "./CategoryCard";

const Category = () => {
    return(
        <div className="wrapper-category">
            <p className="narrowTopText">ТЕМЫ</p>

            <div className="container-category">
                <CategoryCard image={art_1} title={'Русь'}/>
                <div className="category-card-container">
                    <CategoryCard image={art_2} title={'Животные'}/>
                    <CategoryCard image={art_3} title={'Русь'}/>
                    <CategoryCard image={art_4} title={'Животные'}/>
                    <CategoryCard image={art_5} title={'Русь'}/>
                </div>
            </div>

            <button className="showMoreBtn">СМОТРЕТЬ БОЛЬШЕ</button>
        </div>
    )
}

export default Category;