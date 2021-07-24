import React from 'react';
import {connect} from "react-redux";
import Drink from "./Drink";
import {actions} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";


class DrinkContainer extends React.Component {


    render() {

        return (

            <Drink drink={this.props.drink} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state) => {

    return {
        drink: state.drinkPage.drink

    }


}


export default compose(
    connect(mapStateToprops, {buy: actions.buy}),
)(DrinkContainer)




