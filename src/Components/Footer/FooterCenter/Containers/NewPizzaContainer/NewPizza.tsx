import s from './StyleNewPizzaContainer/NewPizza.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {AllOrderType} from "../../../../../Types/Type";


type Props = {
    pizza: Array<AllOrderType>
}


const NewPizza: React.FC<Props> = (props) => {

    return (
        <li className={s.pizza}>
            {props.pizza.map(u => <div key={u.id}>
                <NavLink className={s.pizza_container} to={"/items/" + u.id}>
                    <div className={s.photo}>
                        <img src={u.photoURL} alt=""/>
                    </div>
                    <div className={s.pizza_name}>
                        <span>
                            {u.name}
                        </span>
                        <p>
                            від {u.cost} грн
                        </p>
                    </div>
                </NavLink>

            </div>)
            }
        </li>
    )


}
export default NewPizza;