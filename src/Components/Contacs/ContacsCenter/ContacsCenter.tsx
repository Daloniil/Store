import s from "./StyleContacsCenter/ContacsCenter.module.css";
import React from "react";

export const ContacsCenter = () => {
    return (
        <div className={s.about_center}>
            <div className={s.about_center_container}>
                <div className={s.about_center_left}>
                    <div className={s.about_center_left_name}>
                        <h2>Контактна інформація</h2>
                    </div>
                    <div className={s.about_center_left_abz}>
                        <ul className={s.about_center_left_text}>
                            <li>Графік роботи: <br/>
                                12:00-22:00 кожного дня
                            </li>
                            <li>Замовити піцу:<br/>
                                Тел.: +380 96 744 222 4
                            </li>
                            <li>Inst.: pizzatimebc замовити в direct
                            </li>
                            <li>НWeb.: оформити замовлення або залишити зворотній дзвінок
                            </li>
                            <li>Співпраця та пропозиції<br/>
                                Email: pizzatimebc.info@gmail.com
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className={s.mapcontainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82398.72848589475!2d30.05194617079861!3d49.80561468584142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d3423e37227b9d%3A0x84e311f8582cc6e8!2z0JHQtdC70LDRjyDQptC10YDQutC-0LLRjCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDkxMDA!5e0!3m2!1sru!2sua!4v1627942613584!5m2!1sru!2sua"
                     loading="lazy"></iframe>
            </div>

        </div>
    )
}