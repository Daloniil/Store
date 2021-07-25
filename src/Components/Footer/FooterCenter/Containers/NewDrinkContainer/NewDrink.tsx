import s from './StyleNewDrinkContainers/NewDrink.module.css'
import {NavLink} from "react-router-dom";
import {DrinkType} from "../../../../../Redux/NewMenu/new-drink-reducer";
import React from "react";


type Props = {
    drink: Array<DrinkType>
}

const NewDrink: React.FC<Props> = (props) => {

    return (
        <li className={s.drink}>
            {props.drink.map(u => <div key={u.id}>
                <NavLink className={s.drink_container} to={"/items/" + u.id}>
                    <div className={s.photo}>
                        <img src={u.photoURL} alt=""/>
                    </div>
                    <div className={s.drink_name}>
                        <span>
                            {u.name}
                        </span>
                        <p>
                            {u.cost} грн
                        </p>
                    </div>
                </NavLink>

            </div>)
            }
        </li>
    )


}
export default NewDrink;