import s from "./StyleCenterCenter/CenterCenter.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const CenterCenter: React.FC = () => {
  return (
    <div className={s.center_center_header}>
      <div className={s.center_center_header_bac}></div>
      <div className={s.center_center_header_wave}></div>
      <div className={s.center_center_header_container}>
        <div className={s.center_center_header_container_left}>
          <div className={s.center_center_header_container_right_title}>
            <span>Чому саме ми</span>
          </div>
          <div className={s.center_center_header_container_right_about}>
            <span>Сервіс доставки товарів</span>
          </div>
          <div className={s.center_center_header_container_right_about_second}>
            <span>
              Це не просто черговий бізнес. Це справа, яку ми робимо з любов`ю і
              відповідальністю! І крім того маємо багато переваг перед
              конкурентами
            </span>
          </div>

          <div className={s.center_center_header_container_right_button}>
            <NavLink to={"/profile/pizza"} className={s.order}>
              <button> Замовити товари 🛒</button>
            </NavLink>
          </div>
        </div>
        <div className={s.center_center_header_container_right}>
          <ul className={s.center_center_header_container_right_first}>
            <li>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/why_we_freshness.png"
                alt=""
              />
            </li>
            <li> Свіжість</li>
            <li>
              Використовуємо лише найсвіжіші та найсмачніші продукти, що не
              мають в складі стабілізаторів та консервантів.
            </li>
          </ul>
          <ul className={s.center_center_header_container_right_second}>
            <li>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/why_we_speedy.png"
                alt=""
              />
            </li>
            <li> Швидкість</li>
            <li>
              Ми намагаємось доставити ваше замовлення як можна скоріше, і по
              словам наших клієнтів, ми дійсно є першими.
            </li>
          </ul>
          <ul className={s.center_center_header_container_right_thirht}>
            <li>
              <img
                src="https://pizzatime.com.ua/wp-content/uploads/2020/11/why_we_exclusive.png"
                alt=""
              />
            </li>
            <li>Неповторність</li>
            <li>
              Випікаємо не звичайну піцу. Піца готується із найніжнішого тіста,
              виготовленого за спеціальною технологією.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CenterCenter;
