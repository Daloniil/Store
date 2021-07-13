import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import HeaderCenter from "./HeaderCenter";
import {amountLeght} from "../../../Redux/buy-item-reducer";


class HeaderCenterContainer extends React.Component {


    render() {

        return (

            <HeaderCenter item={this.props.item} length={this.props.lenght} amounts={this.props.amounts}
                          />
        )
    }
}


let mapStateToprops = (state) => {

    return {
        item: state.BuyPage.item,
        amounts: state.BuyPage.amoun,
        lenght: state.BuyPage.lenght


    }


}

export default compose(
    connect(mapStateToprops, {}),
)(HeaderCenterContainer)




