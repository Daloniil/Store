import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import AllOrder from "./AllOrder";
import {actionsn} from "../../../Redux/later-seen-reducer";
import {actions} from "../../../Redux/buy-item-reducer";


class AllOrderContainer extends React.Component {


    render() {
        if (this.props.match.params.id <= 13) {
            this.props.newItem(this.props.pizza[this.props.match.params.id - 1], this.props.ves, this.props.size)
        } else if (this.props.match.params.id >= 14 && this.props.match.params.id < 20) {
            this.props.newItem(this.props.drink[this.props.match.params.id - 14])
        } else if (this.props.match.params.id >= 20 && this.props.match.params.id < 33) {
            this.props.newItem(this.props.sneks[this.props.match.params.id - 20])
        } else if (this.props.match.params.id >= 33 && this.props.match.params.id < 41) {
            this.props.newItem(this.props.sous[this.props.match.params.id - 33])
        } else if (this.props.match.params.id >= 41 && this.props.match.params.id < 45) {
            this.props.newItem(this.props.npizza[this.props.match.params.id - 41])
        } else if (this.props.match.params.id >= 45 && this.props.match.params.id < 49) {
            this.props.newItem(this.props.nsnek[this.props.match.params.id - 45])
        } else if (this.props.match.params.id >= 49 && this.props.match.params.id < 53) {
            this.props.newItem(this.props.ndrink[this.props.match.params.id - 49])
        }


        return (
            <div>
                <AllOrder
                    number={this.props.match.params.id} size={this.props.size} ves={this.props.ves}
                    newItem={this.props.newItem} buy={this.props.buy}
                    pizza={this.props.match.params.id <= 13 ? this.props.pizza[this.props.match.params.id - 1] : this.props.pizza[0]}
                    drink={this.props.match.params.id >= 14 && this.props.match.params.id < 20 ? this.props.drink[this.props.match.params.id - 14] : this.props.drink[0]}
                    sneks={this.props.match.params.id >= 20 && this.props.match.params.id < 33 ? this.props.sneks[this.props.match.params.id - 20] : this.props.sneks[0]}
                    sous={this.props.match.params.id >= 33 && this.props.match.params.id < 41 ? this.props.sous[this.props.match.params.id - 33] : this.props.sous[0]}
                    npizza={this.props.match.params.id >= 41 && this.props.match.params.id < 45 ? this.props.npizza[this.props.match.params.id - 41] : this.props.npizza[0]}
                    nsnek={this.props.match.params.id >= 45 && this.props.match.params.id < 49 ? this.props.nsnek[this.props.match.params.id - 45] : this.props.nsnek[0]}
                    ndrink={this.props.match.params.id >= 49 && this.props.match.params.id < 53 ? this.props.ndrink[this.props.match.params.id - 49] : this.props.ndrink[0]}
                />
            </div>

        )
    }
}


let mapStateToprops = (state) => {

    return {
        pizza: state.pizzaPage.pizza,
        size: state.pizzaPage.siza,
        ves: state.pizzaPage.ves,
        drink: state.drinkPage.drink,
        sneks: state.sneksPage.sneks,
        sous: state.sousPage.sous,
        ndrink: state.newDrinkPage.drink,
        npizza: state.newPizzaPage.pizza,
        nsnek: state.newSnekPage.snek,


    }


}

export default compose(
    connect(mapStateToprops, {newItem: actionsn.newItem, buy: actions.buy}),
    withRouter,
)(AllOrderContainer)




