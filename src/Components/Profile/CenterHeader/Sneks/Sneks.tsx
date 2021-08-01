import s from '../Sneks/StyleSneks/Sneks.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {BuyItemType} from "../../../../Redux/buy-item-reducer";
import {AllOrderType, ReducerType} from "../../../../Types/Type";


type Props = {
    sneks: Array<ReducerType>
    buy: (info: ReducerType, cost: number, size: number) => void
}


const Sneks: React.FC<Props> = (props) => {
    let BuyItem

    return (

        <div className={s.pizza}>

            {props.sneks.map(u => <div key={u.id}>
                <NavLink to={"/items/" + u.id} className={s.pizza_nav}>
                    <div className={s.pizza_container}>
                        <div className={s.pizza_all}>

                            <div className={s.pizza_all_photo}>
                                <img src={u.photoURL} className={s.img}/>
                            </div>


                            <div className={s.pizza_all_name}>
                                <div className={s.name}>{u.name}</div>
                            </div>

                            <div className={s.pizza_all_cost}>
                                <div className={s.cost}>{u.cost} грн</div>
                            </div>

                            <div className={s.pizza_all_structure}>
                                <div className={s.structure}>{u.structure}</div>
                            </div>

                            <div className={s.pizza_all_bottom}>
                                <div className={s.pizza_all_bottom_button}>

                                        <span className={s.button}>
                                            <NavLink className={s.your_buy} to={"/buy"}
                                                     onClick={BuyItem = () => {

                                                         props.buy(props.sneks[u.id - 20], props.sneks[u.id - 20].cost, 0)
                                                     }
                                                     }> Замовити</NavLink>

                                        </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </NavLink>
            </div>)
            }

        </div>
    )
}

export default Sneks;