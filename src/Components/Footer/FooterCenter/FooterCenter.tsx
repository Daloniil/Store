import s from './StyleFooterCenter/FooterCenter.module.css'
import NewPizzaContainer from "./Containers/NewPizzaContainer/NewPizzaContainer";
import NewSnekContainer from "./Containers/NewSnekContainer/NewSnekContainer";
import NewDrinkContainer from "./Containers/NewDrinkContainer/NewDrinkContainer";
import React from "react";

const FooterCenter: React.FC = () => {
    return (
        <div className={s.footer_center}>
            <div className={s.footer_center_wave}>

            </div>
            <div className={s.footer_center_container_back}>
                <div className={s.footer_center_container}>
                    <div className={s.footer_center_left}>
                        <div className={s.footer_center_left_up}>
                            <img src="https://pizzatime.com.ua/wp-content/uploads/2020/11/PT-Logo_round_150.png"
                                 alt=""/>
                            <span>Швидка безкоштовна доставка найсмачнішої піци по м. Біла Церква</span>
                            <p>* при замовленні від 300 грн</p>
                        </div>
                        <div className={s.footer_center_left_down}>
                            <p> (096) 744 222 4</p>
                            <p>@pizzatimebc</p>
                            <p>Пн. - Нд.: 12:00 - 22:00</p>
                        </div>
                    </div>
                    <div className={s.footer_center_center_first}>
                        <div className={s.footer_center_center_first_name}>
                            <span>НАША НОВЕНЬКА ПІЦА</span>
                        </div>
                        <div className={s.footer_center_center_first_colum}>
                            <ul className={s.footer_center_center_first_colum_pizza}>
                                <NewPizzaContainer/>
                            </ul>
                        </div>
                    </div>

                    <div className={s.footer_center_center_second}>
                        <div className={s.footer_center_center_second_name}>
                            <span>ПОПУЛЯРНІ СНЕКИ</span>
                        </div>
                        <div className={s.footer_center_center_second_colum}>
                            <ul className={s.footer_center_center_second_colum_snek}>
                                <NewSnekContainer/>
                            </ul>
                        </div>
                    </div>

                    <div className={s.footer_center_center_three}>
                        <div className={s.footer_center_center_three_name}>
                            <span>ПОПУЛЯРНІ НАПОЇ</span>
                        </div>
                        <div className={s.footer_center_center_three_colum}>
                            <ul className={s.footer_center_center_three_colum_drink}>
                                <NewDrinkContainer/>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FooterCenter