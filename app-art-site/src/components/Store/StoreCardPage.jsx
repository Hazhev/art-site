import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import "../../Styles/StoreCardPage.css";
import BuyImg from "../../image/Store-buy.png";
import Calendar from "../../image/Calendar.svg";
import Graph from "../../image/Graph.png";
import iconHeart from '../../image/iconHeart.svg';
import ArtistsPhoto from '../../image/artists.png';
import Aplus from '../../image/Aplus.svg';
import Achievement from '../../image/achievement.png';

const StoreCardPage = () => {
    return(
        <div className="wrapper-store-card-page">
            <div className="container-store-card-page">
                <Breadcrumbs/>

                <div className="title-container-store-card-page">
                    <div className="title-store-card-page">"Лодка-Водка"</div>
                    <div className="title-sub-store-card-page">Виктор Понамаренко</div>
                </div>

                <div className="buy-container-store-card-page">

                    <div className="buy-image-container">
                        <img src={BuyImg} alt="" />
                        <div className="buy-image-sub">
                            <img src={BuyImg} alt="" />
                            <img src={BuyImg} alt="" />
                            <img src={BuyImg} alt="" />
                            <img src={BuyImg} alt="" />
                        </div>
                    </div>

                    <div className="buy-text-container">
                        <div className="buy-text-title">Провенанс</div>
                        <div className="buy-text-content">
                            <p>Женское окончание вразнобой выбирает конкретный речевой акт. Брахикаталектический стих, как бы это ни казалось парадоксальным, сложен. Дактиль начинает речевой акт, хотя в существование или актуальность этого он не верит, а моделирует собственную реальность.</p>
                            <p>Аллюзия, соприкоснувшись в чем-то со своим главным антагонистом в постструктурной поэтике, параллельна. Анжамбеман нивелирует голос персонажа. Обычная литература, перенесенная в Сеть, не является "сетературой" в смысле отдельного жанра, однако амфибрахий вызывает цикл.</p>
                            <p>Познание текста, несмотря на внешние воздействия, самопроизвольно. Различное расположение, несмотря на внешние воздействия, ненаблюдаемо. Однако, исследователи постоянно сталкиваются с тем, что цикл осознаёт акцент. Гиперцитата, без использования формальных признаков поэзии, редуцирует ритм. Стихотворение, соприкоснувшись в чем-то со своим главным антагонистом в постструктурной поэтике, выбирает деструктивный гекзаметр. Графомания дает резкий генезис свободного стиха, таким образом в некоторых случаях образуются рефрены, кольцевые композиции, анафоры.</p>
                        </div>
                    </div>

                    <div className="buy-button-price-container">
                        <div className="buy-button-price-line">32 000 Руб.</div>
                        <div className="buy-button-container">
                            <button id="button-buy">Купить</button>
                            <button id="button-like"><img src={iconHeart} alt=''/></button>
                        </div>
                    </div>
                </div>

                <div className="graph-container-store-card-page">
                    <div className="buy-text-title">Инвестиционная перспектива</div>

                    <div className="graph-img-table-container">

                        <img src={Graph} alt="" id="Graph"/>

                        <div className="graph-table">

                            <div className="graph-table-w">
                                <div className="greaph-light-text">Выберите период</div>
                                <div className="graph-table-box">
                                    <div className="graph-dark-text">18.03.2022 - 01.04.2022</div>
                                    <img src={Calendar} alt="" id="Calendar"/>
                                </div>
                            </div>

                            <div className="graph-table-w ">
                                <div className="greaph-light-text">Максимальная стоимость</div>
                                <div className="graph-table-box">
                                    <div className="graph-dark-text">125 000 руб.</div>
                                </div>
                            </div>

                            <div className="graph-table-w ">
                                <div className="greaph-light-text">Минимальная стоимость</div>
                                <div className="graph-table-box">
                                    <div className="graph-dark-text">0 руб.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="about-container-store-card-page">
                    <div className="about-img-container">
                        <img src={ArtistsPhoto} alt="" id="aboutImg"/>
                        <button className="about-btn">Виктор Пономаренко</button>
                        <img src={Aplus} alt="" id="aplusImg"/>
                    </div>
                    <div className="about-text-container">
                        <div className="buy-text-title">О художнике</div>
                        <div className="buy-text-content about">
                            <p>Женское окончание вразнобой выбирает конкретный речевой акт. Брахикаталектический стих, как бы это ни казалось парадоксальным, сложен. Дактиль начинает речевой акт, хотя в существование или актуальность этого он не верит, а моделирует собственную реальность.</p>
                            <p>Аллюзия, соприкоснувшись в чем-то со своим главным антагонистом в постструктурной поэтике, параллельна. Анжамбеман нивелирует голос персонажа. Обычная литература, перенесенная в Сеть, не является "сетературой" в смысле отдельного жанра, однако амфибрахий вызывает цикл.</p>
                            <p>Познание текста, несмотря на внешние воздействия, самопроизвольно. Различное расположение, несмотря на внешние воздействия, ненаблюдаемо. Однако, исследователи постоянно сталкиваются с тем, что цикл осознаёт акцент. Гиперцитата, без использования формальных признаков поэзии, редуцирует ритм. Стихотворение, соприкоснувшись в чем-то со своим главным антагонистом в постструктурной поэтике, выбирает деструктивный гекзаметр. Графомания дает резкий генезис свободного стиха, таким образом в некоторых случаях образуются рефрены, кольцевые композиции, анафоры.</p>
                            <p>Познание текста, несмотря на внешние воздействия, самопроизвольно. Различное расположение, несмотря </p>
                        </div>
                    </div>
                </div>

                <div className="achievements-container-store-card-page">

                    <div className="achievements-title">Достижения художника</div>

                    <div className="achievements-img-container">
                        <div className="achievements-img-box">
                            <img src={Achievement} alt="" />
                            <div className="achievements-box-title">Лучшая рука Дикого Запада</div>
                            <div className="achievements-box-content">Получена 13 сентября 2022</div>
                        </div>
                        <div className="achievements-img-box">
                            <img src={Achievement} alt="" />
                            <div className="achievements-box-title">Лучшая рука Дикого Запада</div>
                            <div className="achievements-box-content">Получена 13 сентября 2022</div>
                        </div>
                        <div className="achievements-img-box">
                            <img src={Achievement} alt="" />
                            <div className="achievements-box-title">Лучшая рука Дикого Запада</div>
                            <div className="achievements-box-content">Получена 13 сентября 2022</div>
                        </div>
                        <div className="achievements-img-box">
                            <img src={Achievement} alt="" />
                            <div className="achievements-box-title">Лучшая рука Дикого Запада</div>
                            <div className="achievements-box-content">Получена 13 сентября 2022</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StoreCardPage;