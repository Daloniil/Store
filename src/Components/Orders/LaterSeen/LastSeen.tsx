import s from './StyleLaterSeen/LaterSeen.module.css'
import {NavLink} from "react-router-dom";
import {ItemType} from "../../../Types/Type";
import React from "react";
import {useSelector} from "react-redux";
import {getitem} from "../../../Selectors/buy-item-selector";
import {getlastitem} from "../../../Selectors/last-seen-selector";


const LastSeen: React.FC = () => {

    const item = useSelector(getlastitem)

    let l

    if (!item[0].eat) {
        l = ""
    } else {

        l = <div>
            {[...item].reverse().map(u => <div key={u._id}>
                {u.eat.id > 52 ?
                    <NavLink className={s.container} to={"/profile" + u.eat.id}>

                        <div className={s.container_photo}>
                            <img src={u.eat.photoURL} alt="" height="75" width="75"/>
                        </div>
                        <div className={s.info}>
                            <div className={s.container_name}>{u.eat.name}</div>
                            <div className={s.container_cost}>{u.eat.cost} грн</div>
                        </div>
                    </NavLink>

                    :
                    <NavLink className={s.container} to={"/items/" + u.eat.id}>

                        <div className={s.container_photo}>
                            <img src={u.eat.photoURL} alt="" height="75" width="75"/>
                        </div>
                        <div className={s.info}>
                            <div className={s.container_name}>{u.eat.name}</div>
                            <div className={s.container_cost}>{Math.round(u.eat.cost)} грн</div>
                        </div>
                    </NavLink>

                }
            </div>)}
        </div>
    }

    return (
        <div className={s.content}>
            <p className={s.names}> Недавно переглянуті</p>
            {l}
        </div>
    )
}
export default LastSeen