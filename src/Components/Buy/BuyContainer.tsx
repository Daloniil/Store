import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Buy from "./Buy";
import {actions, ItemType} from "../../Redux/buy-item-reducer";
import {AppStateType} from "../../Redux/redux-store";


type Props = {
    item: Array<ItemType>
    lenght: number | null
    amounts: number

    deleteLenght: (lenght: number) => void
    amountLeghtminus: (lenght: number) => void
    amountLeghtplus: () => void


}

class BuyContainer extends React.Component<Props> {


    render() {


        return (

            <Buy item={this.props.item} lenght={this.props.lenght} deleteLenght={this.props.deleteLenght}
                 amountLeghtminus={this.props.amountLeghtminus} amounts={this.props.amounts}
                 amountLeghtplus={this.props.amountLeghtplus}/>
        )
    }
}


let mapStateToprops = (state: AppStateType) => {

    return {
        item: state.BuyPage.item,
        lenght: state.BuyPage.lenght,
        amounts: state.BuyPage.amoun,


    }


}

export default compose(
    connect(mapStateToprops, {
        deleteLenght: actions.deleteLenght,
        amountLeghtminus: actions.amountLeghtminus,
        amountLeghtplus: actions.amountLeghtplus
    }),
)(BuyContainer)




