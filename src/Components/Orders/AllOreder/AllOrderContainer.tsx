import React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux";
import AllOrder from "./AllOrder";
import {actionsn} from "../../../Redux/later-seen-reducer";
import {actions} from "../../../Redux/buy-item-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {AllOrderType} from "../../../Types/Type";


type PathParamsType = {
    id: string
}


type Ownprops = {
    pizza: Array<AllOrderType>
    drink: Array<AllOrderType>
    sneks: Array<AllOrderType>
    sous: Array<AllOrderType>
    npizza: Array<AllOrderType>
    nsnek: Array<AllOrderType>
    ndrink: Array<AllOrderType>
    size: number
    ves: number
    newItem: (info: AllOrderType, ves: number | undefined, size: number | undefined) => void
    buy: (info: AllOrderType, cost: number, size: number) => void
    number: number | null
}


type Props = RouteComponentProps<PathParamsType> & Ownprops


class AllOrderContainer extends React.Component <Props> {


    render() {
        let numbers: number | null = +this.props.match.params.id

        if (numbers <= 13) {
            this.props.newItem(this.props.pizza[numbers - 1], this.props.ves, this.props.size)
        } else if (numbers >= 14 && numbers < 20) {
            this.props.newItem(this.props.drink[numbers - 14], 0, 0)
        } else if (numbers >= 20 && numbers < 33) {
            this.props.newItem(this.props.sneks[numbers - 20], 0, 0)
        } else if (numbers >= 33 && numbers < 41) {
            this.props.newItem(this.props.sous[numbers - 33], 0, 0)
        } else if (numbers >= 41 && numbers < 45) {
            this.props.newItem(this.props.npizza[numbers - 41], 0, 0)
        } else if (numbers >= 45 && numbers < 49) {
            this.props.newItem(this.props.nsnek[numbers - 45], 0, 0)
        } else if (numbers >= 49 && numbers < 53) {
            this.props.newItem(this.props.ndrink[numbers - 49], 0, 0)
        }


        return (
            <div>
                <AllOrder
                    number={numbers} size={this.props.size} ves={this.props.ves}
                    newItem={this.props.newItem} buy={this.props.buy}
                    pizza={numbers <= 13 ? this.props.pizza[numbers - 1] : this.props.pizza[0]}
                    drink={numbers >= 14 && numbers < 20 ? this.props.drink[numbers - 14] : this.props.drink[0]}
                    sneks={numbers >= 20 && numbers < 33 ? this.props.sneks[numbers - 20] : this.props.sneks[0]}
                    sous={numbers >= 33 && numbers < 41 ? this.props.sous[numbers - 33] : this.props.sous[0]}
                    npizza={numbers >= 41 && numbers < 45 ? this.props.npizza[numbers - 41] : this.props.npizza[0]}
                    nsnek={numbers >= 45 && numbers < 49 ? this.props.nsnek[numbers - 45] : this.props.nsnek[0]}
                    ndrink={numbers >= 49 && numbers < 53 ? this.props.ndrink[numbers - 49] : this.props.ndrink[0]}
                />
            </div>

        )
    }
}


let mapStateToprops = (state: AppStateType) => {

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

export default compose<React.ComponentType>(
    connect(mapStateToprops, {newItem: actionsn.newItem, buy: actions.buy}),
    withRouter,
)(AllOrderContainer)




