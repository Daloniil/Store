import s from "./CenterHeader.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const MenuBar: React.FC = () => {
  return (
    <div className={s.center_header}>
      <div className={s.center_header_container}>
        <div className={s.center_header_container_text}>
          <span>Смачне й швидке</span>
          <h2>Меню доставки</h2>
          <p>
            Зробіть швидке замовлення, якщо Ви впевненні у своєму смаку та{" "}
            <br /> побажаннях. Якщо ні – для Вас є повне меню зі зручними
            фільтрами <br /> для пошуку у розділі <a href="#">Меню.</a>
          </p>
        </div>
      </div>

      <div className={s.menu}>
        <div className={s.pizza} style={{ textAlign: "center" }}>
          <span>
            <NavLink
              to="/profile/sweets"
              className={s.piza}
              activeClassName={s.ac}
            >
              Кондитерскі вироби
            </NavLink>
          </span>
        </div>

        <div className={s.sneks} style={{ textAlign: "center" }}>
          <span>
            <NavLink
              to="/profile/milk"
              className={s.snek}
              activeClassName={s.ac}
            >
              Молочні продукти
            </NavLink>
          </span>
        </div>
        <div className={s.drink} style={{ textAlign: "center" }}>
          <span>
            <NavLink
              to="/profile/drink"
              className={s.drin}
              activeClassName={s.ac}
            >
              Кава/Чай
            </NavLink>
          </span>
        </div>
        <div className={s.soys} style={{ textAlign: "center" }}>
          <span>
            <NavLink
              to="/profile/grocery"
              className={s.soy}
              activeClassName={s.ac}
            >
              Бакалія
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
