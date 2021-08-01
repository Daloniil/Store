import React from 'react';
import {connect} from "react-redux";
import Pizza from "./Pizza";
import {actions} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";
import {ReducerType} from "../../../../Types/Type";
import {AppStateType} from "../../../../Redux/redux-store";


type Props = {
    pizza: Array<ReducerType>
    buy: (info: ReducerType, cost: number, size: number) => void


}

class PizzaContainer extends React.Component<Props> {


    render() {

        return (
            <Pizza pizza={this.props.pizza} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state: AppStateType) => {

    return {
        pizza: state.pizzaPage.pizza
    }


}


export default compose(
    connect(mapStateToprops, {buy: actions.buy}),
)(PizzaContainer)




