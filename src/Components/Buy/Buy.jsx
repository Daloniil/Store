import {NavLink} from "react-router-dom";
import s from "./StyleBuy/Buy.module.css";
import {Component} from "react";


class Buy extends Component {

    plus
    minus
    delet


    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            this.setState({
                item: this.props.item,
            })
        }
    }

    state = {
        item: this.props.item,
    }


    render() {
        let view


        let cost = this.props.item.reduce(function (a, b) {
            return Math.round(a + b.cost);
        }, 0);


        if (this.props.item.length == 0) {
            view = <div className={s.container_no_buy}>
                <span>Ви ще не обрали замовлення</span>
                <NavLink to={"/profile/pizza"} className={s.p}>Перейти в меню</NavLink>
            </div>
        } else {
            view = <div className={s.container_buy}>
                <div className={s.order}>
                    <span>Кошик</span>
                </div>
                {this.props.item.map(u => <div key={u._id}>

                    <div className={s.info}>

                        <div className={s.container_photo}>
                            <img src={u.eat.photoURL} alt="" height="75" width="75"/>
                        </div>


                        <div className={s.your_order}>
                            <div className={s.container_name}>
                                {u.eat.name} {u.size > 0 ? "-" : ""} {u.size} {u.size > 0 ? "см" : ""}


                            </div>

                            <div className={s.amount}>
                                <div className={s.border_minus}>
                                    <p className={s.minus} onClick={this.plus = () => {
                                        if (u.eat.amount > 1) {
                                            this.props.amountLeghtminus(1)
                                        }
                                        u.eat.amount = u.eat.amount > 1 ? u.eat.amount - 1 : u.eat.amount
                                        u.cost = u.eat.cost * u.eat.amount

                                        this.forceUpdate()
                                    }}>-</p>
                                </div>
                                <p className={s.number_amount}>{u.eat.amount}</p>
                                <p className={s.plus} onClick={this.plus = () => {
                                    u.eat.amount = u.eat.amount + 1
                                    u.cost = (u.eat.cost) * u.eat.amount
                                    this.props.amountLeghtplus()

                                    this.forceUpdate()
                                }}>+</p>
                            </div>

                            <div className={s.costs}>
                                <span className={s.x}> {u.eat.amount} x</span> <span
                                className={s.amount_cost}>{Math.round(u.eat.cost)} грн</span>
                            </div>

                        </div>

                        <span className={s.delete} onClick={this.delet = () => {
                            let searchindex = u._id
                            this.props.amountLeghtminus(this.state.item[this.state.item.findIndex(el => el._id === searchindex)].eat.amount)
                            this.state.item[this.state.item.findIndex(el => el._id === searchindex)].eat.amount = 1
                            this.state.item.splice(this.state.item.findIndex(el => el._id === searchindex), 1)
                            this.props.deleteLenght(this.props.lenght > 0 ? this.props.lenght - 1 : null)
                            this.forceUpdate()
                        }
                        }>x</span>

                    </div>

                </div>)}




                <div className={s.all}>
                    <div className={s.all_cost_order}>
                        <span className={s.text}>Разом:</span> <span className={s.all_cost}>{cost} грн</span>
                    </div>
                    <div className={s.button_order}>
                        <NavLink to={"/checkout"} className={s.your_like}> Замовити</NavLink>
                    </div>
                </div>


            </div>
        }


        return (
            <div className={s.content}>
                {view}
            </div>
        )
    }
}

export default Buy