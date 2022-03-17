import s from "./StyleFooterCenter/FooterCenter.module.css";
import React from "react";
import NewDrink from "./Containers/NewDrinkContainer/NewDrink";
import NewPizza from "./Containers/NewPizzaContainer/NewPizza";
import NewSnek from "./Containers/NewSnekContainer/NewSnek";
import logo from "../../../Assets/Logo/4thfebruary-bladi-one-slab-4f-removebg-preview.webp";

const FooterCenter: React.FC = () => {
  return (
    <div className={s.footer_center}>
      <div className={s.footer_center_container_back}>
        <div className={s.footer_center_container}>
          <div className={s.footer_center_left}>
            <div className={s.footer_center_left_up}>
              <img src={logo} alt="" />
              <span>Швидка безкоштовна доставка товарів по Київу</span>
              <p>* при замовленні від 500 грн</p>
            </div>
            <div className={s.footer_center_left_down}>
              <p> (096) 777 777 88</p>
              <p>Пн. - Нд.: 12:00 - 22:00</p>
            </div>
          </div>
          <div className={s.footer_center_center_first}>
            <div className={s.footer_center_center_first_name}>
              <span>ПОПУЛЯРНІ СОЛОДОЩІ</span>
            </div>
            <div className={s.footer_center_center_first_colum}>
              <ul className={s.footer_center_center_first_colum_pizza}>
                <NewPizza />
              </ul>
            </div>
          </div>

          <div className={s.footer_center_center_second}>
            <div className={s.footer_center_center_second_name}>
              <span>ПОПУЛЯРНІ МОЛОЧНІ ПРОДУКТИ</span>
            </div>
            <div className={s.footer_center_center_second_colum}>
              <ul className={s.footer_center_center_second_colum_snek}>
                <NewSnek />
              </ul>
            </div>
          </div>

          <div className={s.footer_center_center_three}>
            <div className={s.footer_center_center_three_name}>
              <span>ПОПУЛЯРНІ НАПОЇ</span>
            </div>
            <div className={s.footer_center_center_three_colum}>
              <ul className={s.footer_center_center_three_colum_drink}>
                <NewDrink />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterCenter;
