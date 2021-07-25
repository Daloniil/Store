import React from 'react';
import {connect} from "react-redux";
import {actions, BuyItemType} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";
import {AllOrderType} from "../../../../Types/Type";
import {AppStateType} from "../../../../Redux/redux-store";
import Drink from "./Drink";


type Props = {
    drink: Array<AllOrderType>
    buy: (info: BuyItemType, cost: number, size: number) => void


}

class DrinkContainer extends React.Component<Props> {


    render() {

        return (
            <Drink drink={this.props.drink} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state: AppStateType) => {

    return {
        drink: state.drinkPage.drink
    }


}


export default compose(
    connect(mapStateToprops, {buy: actions.buy}),
)(DrinkContainer)




