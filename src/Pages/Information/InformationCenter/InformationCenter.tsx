import s from "./StyleAboutCenter/AboutCenter.module.css";
import React from "react";

const InformationCenter: React.FC = () => {
    return (
        <div className={s.about_center}>
            <div className={s.about_center_container}>
                <div className={s.about_center_left}>
                    <div className={s.about_center_left_name}>
                    </div>
                    <div className={s.about_center_left_abz}>
                        <ul className={s.about_center_left_text}>
                            <li> Працюємо з 12:00 до 22:00. Доставляємо найсмачнішу піцу та снеки щодня без
                                вихідних!
                            </li>
                            <li>Вартість доставки:</li>
                            <li> Робіть замовлення на 300 грн. і більше – отримуйте БЕЗКОШТОВНУ ДОСТАВКУ по місту Біла
                                Церква.
                            </li>
                            <li>Якщо сума замовлення до 300 грн.: вартість доставки складає 40 грн.
                            </li>
                            <li> Діє формат передзамовлень!
                            </li>
                            <li> Можливе приготування і доставка піци / снеків в наш позаробочий час. Для цього завчасно
                                зв’яжіться з нами – ми все обговоримо 🙂
                            </li>
                            <li> Зазвичай доставляємо замовлення за 40-60 хвилин.</li>
                            <li> Іноді бувають затримки через велику кількість бажаючих скуштувати нашу піцу. Дякуємо
                                вам за
                                розуміння у такі моменти! Ми завжди стараємося приготувати і доставити вам смачну їжу
                                якомога швидше.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default InformationCenter