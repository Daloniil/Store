import s from "./StyleCenterBottom/CenterBottom.module.css";
import React from "react";


const CenterBottom: React.FC = () => {

    return (
        <div className={s.center_bottom_header}>
            <div className={s.center_bottom_header_container}>
                <div className={s.center_bottom_header_text}>
                    <h2>ВАША ПІЦА ВЖЕ ГОТОВА!</h2>
                    <span>ЗАМОВЛЯЙТЕ: (096) 744 222 4</span>
                    <p>або оберіть у меню</p>
                </div>
            </div>

        </div>
    )

}
export default CenterBottom