import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Buy from "./Buy";
import {amountLeghtminus, amountLeghtplus, deleteLenght} from "../../Redux/buy-item-reducer";


class BuyContainer extends React.Component {


    render() {


        return (

            <Buy item={this.props.item} lenght={this.props.lenght} deleteLenght={this.props.deleteLenght}
                 amountLeghtminus={this.props.amountLeghtminus} amounts={this.props.amounts}
                 amountLeghtplus={this.props.amountLeghtplus}/>
        )
    }
}


let mapStateToprops = (state) => {

    return {
        item: state.BuyPage.item,
        lenght: state.BuyPage.lenght,
        amounts: state.BuyPage.amoun,


    }


}

export default compose(
    connect(mapStateToprops, {deleteLenght, amountLeghtminus, amountLeghtplus}),
)(BuyContainer)




