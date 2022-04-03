import s from "./AboutCenter.module.css";
import React from "react";

const AboutCenter: React.FC = () => {
  return (
    <div className={s.about_center}>
      <div className={s.about_center_container}>
        <div className={s.about_center_left}>
          <div className={s.about_center_left_name}>
            <h2>Про нас</h2>
          </div>
          <div className={s.about_center_left_abz}>
            <ul className={s.about_center_left_text}>
              <li>
                Новий сервіс доставки продуктів «ProdTime» – це не просто
                черговий бізнес. Це справа, яку ми робимо з любов`ю і
                відповідальністю! І крім того маємо багато переваг перед
                конкурентами:
              </li>
              <li>
                По -перше, ми слідкуємо за термінами продуктів та зберігаємо їх
                в потрібних умоовах.
              </li>
              <li>
                По –друге, швидка доставка. Ми намагаємось доставити вам ваш
                товар як можна щвидше.
              </li>
              <li>
                Отож, обирайте, замовляйте. Ми впевнені, що обравши нас один раз
                – Ви залишитесь з нами назавжди!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCenter;
