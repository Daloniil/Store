import s from './StyleHeaderHeader/Header.module.css'
import React from "react";


export const HeaderHeader: React.FC = () => {

    return (
        <div className={s.header}>
            <div className={s.header_container}>
                <div className={s.header_container_work_conteiner}>
                    <span className={s.header_container_work}>Пн.-Нд.: 12:00 - 22:00</span>
                </div>
                <div className={s.header_container_watch_conteiner}>
                    <a href="https://www.instagram.com/cold_clown/" className={s.a} target="_blank"><span
                        className={s.header_container_watch}>Слідкуйте за нами</span></a>
                </div>
            </div>
        </div>
    )

}
