import s from './StylePizza/pizza.module.css'

import {NavLink} from "react-router-dom";
import React from "react";


const Pizza = (props) => {

    let BuyItem

    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;

    scroll.scrollToTop()

    return (

        <div className={s.pizza}>

            {props.pizza.map(u => <div key={u.id}>
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
                                <div className={s.cost}>Від {u.cost} грн</div>
                            </div>

                            <div className={s.pizza_all_structure}>
                                <div className={s.structure}>{u.structure}</div>
                            </div>

                            <div className={s.pizza_all_bottom}>
                                <div className={s.pizza_all_bottom_button}>

                                        <span className={s.button}>
                                            <NavLink className={s.your_buy} to={"/buy"} onClick={
                                                BuyItem = () => {
                                                    props.buy(props.pizza[u.id - 1], props.pizza[u.id - 1].cost, 28)

                                                }
                                            }> Замовити</NavLink>

                                        </span>
                                </div>

                            </div>

                        </div>
                    </div>
                < /NavLink>
            </div>)
            }

        </div>
    )

}

export default Pizza;