import s from "./ContacsCenter.module.css";
import React from "react";

export const ContactsCenter = () => {
  return (
    <div className={s.about_center}>
      <div className={s.about_center_container}>
        <div className={s.about_center_left}>
          <div className={s.about_center_left_name}>
            <h2>Контактна інформація</h2>
          </div>
          <div className={s.about_center_left_abz}>
            <ul className={s.about_center_left_text}>
              <li>
                Графік роботи: <br />
                12:00-22:00 кожного дня
              </li>
              <li>
                Замовити піцу:
                <br />
                Тел.: +380 96 777 777 7
              </li>
              <li>
                Inst.:
                <a href="https://www.instagram.com/" target="_blank">
                  prodtime замовити в direct
                </a>
              </li>
              <li>НWeb.: оформити замовлення або залишити зворотній дзвінок</li>
              <li>
                Співпраця та пропозиції
                <br />
                Email: prodtime.info@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={s.mapcontainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8543320527688!2d30.511577615946717!3d50.443813895723714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef81316a8c5%3A0x2a744575ac7fe734!2z0LHRg9C7LiDQotCw0YDQsNGB0LAg0KjQtdCy0YfQtdC90LrQviwgMTQsINCa0LjQtdCyLCDQo9C60YDQsNC40L3QsCwgMDEwMzA!5e0!3m2!1sru!2sus!4v1649015492418!5m2!1sru!2sus"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
