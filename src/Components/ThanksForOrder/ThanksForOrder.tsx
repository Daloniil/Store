import s from "./StyleThanksForOrder/ThanksForOrder.module.css"
import {useHistory} from "react-router-dom";


export const ThanksForOrder = () => {
    let history = useHistory();


    return (
        <div className={s.content}>
            <span className={s.xspan} onClick={() => history.push('/profile/pizza')}>X</span>
            <div className={s.thanks}>
                <span>Дякуємо за замовлення!</span>
                <span>Очікуйте дзвінка</span>
            </div>
        </div>
    )
}