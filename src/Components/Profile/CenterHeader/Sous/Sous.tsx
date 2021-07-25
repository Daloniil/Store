import s from '../Pizza/StylePizza/pizza.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {BuyItemType} from "../../../../Redux/buy-item-reducer";


type Props = {
    sous: Array<any>
    buy: (info: BuyItemType, cost: number, size: number) => void
}


const Sous: React.FC<Props> = (props) => {
    let BuyItem

    return (

        <div className={s.pizza}>

            {props.sous.map(u => <div key={u.id}>
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
                                                         props.buy(props.sous[u.id - 33], props.sous[u.id - 33].cost, 0)
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

export default Sous;