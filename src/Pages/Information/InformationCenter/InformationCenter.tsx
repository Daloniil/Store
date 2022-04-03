import s from "./AboutCenter.module.css";
import React from "react";

const InformationCenter: React.FC = () => {
  return (
    <div className={s.about_center}>
      <div className={s.about_center_container}>
        <div className={s.about_center_left}>
          <div className={s.about_center_left_name}></div>
          <div className={s.about_center_left_abz}>
            <ul className={s.about_center_left_text}>
              <li>
                Працюємо з 12:00 до 22:00. Доставляємо продукти щодня без
                вихідних!
              </li>
              <li>Вартість доставки:</li>
              <li>
                Робіть замовлення на 500 грн. і більше – отримуйте БЕЗКОШТОВНУ
                ДОСТАВКУ по Київу.
              </li>
              <li>
                Якщо сума замовлення до 500 грн.: вартість доставки складає 50
                грн.
              </li>
              <li> Діє формат передзамовлень!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformationCenter;
