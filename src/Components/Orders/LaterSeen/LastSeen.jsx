import s from './StyleLaterSeen/LaterSeen.module.css'
import {NavLink} from "react-router-dom";


const LastSeen = (props) => {

    let l

    if (!props.item[0].eat) {
        l = ""
    } else {
        l = <div>
            {[...props.item].reverse().map(u => <div key={u._id}>
                <NavLink className={s.container} to={"/items/" + u.eat.id}>

                    <div className={s.container_photo}>
                        <img src={u.eat.photoURL} alt="" height="75" width="75"/>
                    </div>
                    <div className={s.info}>
                        <div className={s.container_name}>{u.eat.name}</div>
                        <div className={s.container_cost}> Від {u.eat.cost} грн</div>
                    </div>
                </NavLink>


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