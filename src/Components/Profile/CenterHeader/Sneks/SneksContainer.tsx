import React from 'react';
import Sneks from "./Sneks";
import {connect} from "react-redux";
import {actions, BuyItemType} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";
import {AllOrderType} from "../../../../Types/Type";
import {AppStateType} from "../../../../Redux/redux-store";


type Props = {
    sneks: Array<AllOrderType>
    buy: (info: BuyItemType, cost: number, size: number) => void


}

class SneksContainer extends React.Component<Props> {


    render() {

        return (

            <Sneks sneks={this.props.sneks} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state: AppStateType) => {

    return {
        sneks: state.sneksPage.sneks

    }


}


export default compose(
    connect(mapStateToprops, {buy: actions.buy}),
)(SneksContainer)




