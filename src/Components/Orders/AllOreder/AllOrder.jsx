import s from './StylePizzaOrder/PizzaOrder.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import LastSeenContainer from "../LaterSeen/LastSeenContainer";
import * as Scroll from 'react-scroll'


class AllOrder extends React.Component {


    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            this.setState({
                size: this.props.size,
                cost: this.props.pizza.cost,
                ves: this.props.ves,
                ncost: this.props.npizza.cost,
                pizza: {
                    id: this.props.pizza.id,
                    photoURL: this.props.pizza.photoURL,
                    name: this.props.pizza.name,
                    structure: this.props.pizza.structure,
                    amount: this.props.pizza.amount,
                    cost: this.props.pizza.cost,

                },
                drink: {
                    id: this.props.drink.id,
                    photoURL: this.props.drink.photoURL,
                    name: this.props.drink.name,
                    structure: this.props.drink.structure,
                    cost: this.props.drink.cost,
                    amount: this.props.drink.amount

                },
                sneks: {
                    id: this.props.sneks.id,
                    photoURL: this.props.sneks.photoURL,
                    name: this.props.sneks.name,
                    structure: this.props.sneks.structure,
                    cost: this.props.sneks.cost,
                    amount: this.props.sneks.amount

                },
                sous: {
                    id: this.props.sous.id,
                    photoURL: this.props.sous.photoURL,
                    name: this.props.sous.name,
                    structure: this.props.sous.structure,
                    cost: this.props.sous.cost,
                    amount: this.props.sous.amount

                },
                npizza: {
                    id: this.props.npizza.id,
                    photoURL: this.props.npizza.photoURL,
                    name: this.props.npizza.name,
                    structure: this.props.npizza.structure,
                    amount: this.props.npizza.amount,
                    cost: this.props.npizza.cost,
                },
                nsnek: {
                    id: this.props.nsnek.id,
                    photoURL: this.props.nsnek.photoURL,
                    name: this.props.nsnek.name,
                    structure: this.props.nsnek.structure,
                    cost: this.props.nsnek.cost,
                    amount: this.props.nsnek.amount

                },
                ndrink: {
                    id: this.props.ndrink.id,
                    photoURL: this.props.ndrink.photoURL,
                    name: this.props.ndrink.name,
                    structure: this.props.ndrink.structure,
                    cost: this.props.ndrink.cost,
                    amount: this.props.ndrink.amount


                },

                style_line28: s.no,
                style_line33: s.no,
                style_line45: s.no


            })
        }
    }


    state = {
        size: this.props.size,
        cost: this.props.pizza.cost,
        ves: this.props.ves,
        ncost: this.props.npizza.cost,

        pizza: {
            id: this.props.pizza.id,
            photoURL: this.props.pizza.photoURL,
            name: this.props.pizza.name,
            structure: this.props.pizza.structure,
            amount: this.props.pizza.amount,
            cost: this.props.pizza.cost,


        },
        drink: {
            id: this.props.drink.id,
            photoURL: this.props.drink.photoURL,
            name: this.props.drink.name,
            structure: this.props.drink.structure,
            cost: this.props.drink.cost,
            amount: this.props.drink.amount

        },
        sneks: {
            id: this.props.sneks.id,
            photoURL: this.props.sneks.photoURL,
            name: this.props.sneks.name,
            structure: this.props.sneks.structure,
            cost: this.props.sneks.cost,
            amount: this.props.sneks.amount

        },
        sous: {
            id: this.props.sous.id,
            photoURL: this.props.sous.photoURL,
            name: this.props.sous.name,
            structure: this.props.sous.structure,
            cost: this.props.sous.cost,
            amount: this.props.sous.amount

        },
        npizza: {
            id: this.props.npizza.id,
            photoURL: this.props.npizza.photoURL,
            name: this.props.npizza.name,
            structure: this.props.npizza.structure,
            amount: this.props.npizza.amount,
            cost: this.props.npizza.cost,


        },
        nsnek: {
            id: this.props.nsnek.id,
            photoURL: this.props.nsnek.photoURL,
            name: this.props.nsnek.name,
            structure: this.props.nsnek.structure,
            cost: this.props.nsnek.cost,
            amount: this.props.nsnek.amount

        },
        ndrink: {
            id: this.props.ndrink.id,
            photoURL: this.props.ndrink.photoURL,
            name: this.props.ndrink.name,
            structure: this.props.ndrink.structure,
            cost: this.props.ndrink.cost,
            amount: this.props.ndrink.amount

        },

        style_line28: s.no,
        style_line33: s.no,
        style_line45: s.no
    }


    NewSize28 = () => {
        this.state.pizza.cost = this.props.pizza.cost
        this.state.npizza.cost = this.props.npizza.cost

        this.setState({
            size: 28,
            cost: this.props.pizza.cost,
            ncost: this.props.npizza.cost,
            ves: 370,
            style_line28: s.line28,
            style_line33: s.no,
            style_line45: s.no

        })
    }

    NewSize33 = () => {
        if (this.state.cost < this.props.pizza.cost * 3 || this.state.cost > this.props.pizza.cost * 2.6 || this.state.ncost < this.props.npizza.cost * 3 || this.state.ncost > this.props.npizza.cost * 2.6) {
            this.setState({
                size: 33,
                cost: this.props.pizza.cost * 2.7,
                ncost: this.props.npizza.cost * 2.7,
                ves: 580,
                style_line28: s.no,
                style_line33: s.line33,
                style_line45: s.no


            })
            this.state.pizza.cost = this.props.pizza.cost * 2.7
            this.state.npizza.cost = this.props.npizza.cost * 2.7

            this.state.pizza.id = this.props.pizza.id * 200
            this.state.npizza.id = this.props.npizza.id * 200

        }
    }

    NewSize45 = () => {
        if (this.state.cost <= this.props.pizza.cost * 4 || this.state.ncost <= this.props.npizza.cost * 4) {
            this.setState({
                size: 45,
                cost: this.props.pizza.cost * 4,
                ncost: this.props.npizza.cost * 4,
                ves: 1240,
                style_line28: s.no,
                style_line33: s.no,
                style_line45: s.line45
            })
            this.state.npizza.cost = this.props.npizza.cost * 4
            this.state.pizza.cost = this.props.pizza.cost * 4

            this.state.pizza.id = this.props.pizza.id * 300
            this.state.npizza.id = this.props.npizza.id * 300


        }


    }


    BuyItem = () => {
        if (this.props.number <= 13) {
            this.props.buy(this.state.pizza, this.state.cost, this.state.size)
        } else if (this.props.number >= 14 && this.props.number < 20) {
            this.props.buy(this.props.drink, this.props.drink.cost)
        } else if (this.props.number >= 20 && this.props.number < 33) {
            this.props.buy(this.props.sneks, this.props.sneks.cost)
        } else if (this.props.number >= 33 && this.props.number < 41) {
            this.props.buy(this.props.sous, this.props.sous.cost)
        } else if (this.props.number >= 41 && this.props.number < 45) {
            this.props.buy(this.state.npizza, this.state.cost, this.state.size)
        } else if (this.props.number >= 45 && this.props.number < 49) {
            this.props.buy(this.props.nsnek, this.props.nsnek.cost)
        } else if (this.props.number >= 49 && this.props.number < 53) {
            this.props.buy(this.props.ndrink, this.props.ndrink.cost)
        }

    }

    prov
    link
    name


    render() {

        let item

        if (this.props.number < 14) {
            this.prov = this.state.pizza
        } else if (this.props.number >= 14 && this.props.number < 20) {
            this.prov = this.state.drink
            this.link = "/profile/drink"
            this.name = "Напої"
        } else if (this.props.number >= 20 && this.props.number < 33) {
            this.prov = this.state.sneks
            this.link = "/profile/sneks"
            this.name = "Снеки"
        } else if (this.props.number >= 33 && this.props.number < 41) {
            this.prov = this.state.sous
            this.link = "/profile/sous"
            this.name = "Соус"
        } else if (this.props.number >= 41 && this.props.number < 45) {
            this.prov = this.state.npizza
        } else if (this.props.number >= 45 && this.props.number < 49) {
            this.prov = this.state.nsnek
            this.link = "/profile/sneks"
            this.name = "Снеки"
        } else if (this.props.number >= 49 && this.props.number < 53) {
            this.prov = this.state.ndrink
            this.link = "/profile/drink"
            this.name = "Напої"
        }


        {
            this.props.number < 14 || this.props.number >= 41 && this.props.number < 45 ?
                item = <div className={s.container}>
                    <div className={s.photo_pizza}>
                        <img src={this.prov.photoURL} alt="" height="400" width="400"/>
                    </div>
                    <div className={s.pizza_info}>
                        <div className={s.menu}>
                            <NavLink className={s.link_menu} to="/profile/pizza"> Меню/</NavLink><NavLink
                            className={s.link_pizza}
                            to="/profile/pizza"> Пица/</NavLink>
                            <span className={s.link_name_pizza}>{this.prov.name}</span>
                        </div>
                        <div className={s.pizza}>
                            <div className={s.name_pizza}>{this.prov.name}</div>
                            <div className={s.cost_pizza}>{Math.round(this.prov.cost)} грн</div>
                            <div className={s.strukture_pizza}>{this.prov.structure}</div>
                            <div className={s.ves}> Вага: {this.prov.ves}</div>
                        </div>


                        <div className={s.size_pizza}>
                            <div className={s.input_size}>
                                Розмір піци: {this.state.size}
                            </div>
                            <div className={s.size}>
                                <div className={s.decor28}>
                                    <div className={s.size28} onClick={this.NewSize28}>
                                        28 см
                                    </div>
                                    <div className={this.state.style_line28}>
                                        _______
                                    </div>
                                </div>

                                <div className={s.decor33}>
                                    <div className={s.size33} onClick={this.NewSize33}>
                                        33 см
                                    </div>
                                    <div className={this.state.style_line33}>
                                        _______
                                    </div>
                                </div>

                                <div className={s.decor45}>
                                    <div className={s.size45} onClick={this.NewSize45}>
                                        45 см
                                    </div>
                                    <div className={this.state.style_line45}>
                                        _______
                                    </div>
                                </div>


                            </div>
                            <NavLink className={s.your_like} to="/buy" onClick={this.BuyItem}> Замовити</NavLink>

                        </div>


                    </div>

                    <LastSeenContainer/>
                </div>
                :
                item = <div className={s.container_item}>
                    <div className={s.photo_item}>
                        <img src={this.prov.photoURL} alt="" height="400" width="400"/>
                    </div>
                    <div className={s.item_info}>
                        <div className={s.menu_info}>
                            <NavLink className={s.link_menu_info} to="/profile/pizza">Меню/</NavLink><NavLink
                            className={s.link_info}
                            to={this.link}> {this.name}/</NavLink>
                            <span className={s.link_name_info}>{this.prov.name}</span>
                        </div>
                        <div className={s.info}>
                            <div className={s.name_info}>{this.prov.name}</div>
                            <div className={s.cost_info}>{Math.round(this.prov.cost)} грн</div>
                            <div className={s.strukture_info}>{this.prov.structure}</div>
                        </div>


                        <NavLink className={s.your_item} to="/buy" onClick={this.BuyItem}> Замовити</NavLink>


                    </div>
                    <LastSeenContainer/>

                </div>

        }
        let Scroll = require('react-scroll');
        let scroll = Scroll.animateScroll;
        scroll.scrollToTop()

        return (

            <div className={s.content}>

                {item}
            </div>
        )
    }
}


export default AllOrder

