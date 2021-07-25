import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import HeaderCenter from "./HeaderCenter";
import {AppStateType} from "../../../Redux/redux-store";
import {ItemType} from "../../../Redux/buy-item-reducer";


type Props = {
    item: Array<ItemType>
    lenght: number | null,
    amounts: number,
}


class HeaderCenterContainer extends React.Component<Props> {

    render() {

        return (

            <HeaderCenter item={this.props.item} length={this.props.lenght} amounts={this.props.amounts}
            />
        )
    }
}


let mapStateToprops = (state: AppStateType) => {

    return {
        item: state.BuyPage.item,
        amounts: state.BuyPage.amoun,
        lenght: state.BuyPage.lenght


    }


}

export default compose(
    connect(mapStateToprops, {}),
)(HeaderCenterContainer)




