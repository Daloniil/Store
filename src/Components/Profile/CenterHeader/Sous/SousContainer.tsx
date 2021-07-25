import React from 'react';
import {connect} from "react-redux";
import Sous from "./Sous";
import {actions, BuyItemType} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";
import {AllOrderType} from "../../../../Types/Type";
import {AppStateType} from "../../../../Redux/redux-store";


type Props = {
    sous: Array<AllOrderType>
    buy: (info: BuyItemType, cost: number, size: number) => void


}

class SousContainer extends React.Component<Props> {


    render() {

        return (

            <Sous sous={this.props.sous} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state: AppStateType) => {

    return {
        sous: state.sousPage.sous


    }


}


export default compose(
    connect(mapStateToprops, {buy: actions.buy}),
)(SousContainer)




