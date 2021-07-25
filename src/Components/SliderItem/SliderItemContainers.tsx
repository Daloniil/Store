import React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux";
import SliderItem from "./SliderItem";
import {AllOrderType} from "../../Types/Type";
import {AppStateType} from "../../Redux/redux-store";


type Ownprops = {
    pizza: Array<AllOrderType>
    drink: Array<AllOrderType>
    sneks: Array<AllOrderType>
    sous: Array<AllOrderType>
    number: number
}

type PathParamsType = {
    id: string
}


type Props = RouteComponentProps<PathParamsType> & Ownprops


class SliderItemContainer extends React.Component <Props> {


    render() {

        let numbers: number | null = +this.props.match.params.id


        return (
            <div>
                <SliderItem
                    pizza={this.props.pizza}
                    drink={this.props.drink}
                    sneks={this.props.sneks}
                    sous={this.props.sous}
                    number={numbers}
                />
            </div>

        )
    }
}


let mapStateToprops = (state: AppStateType) => {

    return {
        pizza: state.pizzaPage.pizza,
        drink: state.drinkPage.drink,
        sneks: state.sneksPage.sneks,
        sous: state.sousPage.sous,


    }


}

export default compose<React.ComponentType>(
    connect(mapStateToprops, {}),
    withRouter,
)(SliderItemContainer)




