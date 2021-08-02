import s from "./StyleAboutHeader/AboutHeader.module.css"
import React from "react";

export const ContacsHeader: React.FC = () => {
    return (
        <div className={s.about_header}>
            <div className={s.about_header_container}>
                <div className={s.about_header_text}>
                    <h2>Контактна інформація</h2>
                </div>
            </div>
        </div>
    )
}