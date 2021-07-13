import React from 'react';
import {connect} from "react-redux";
import Pizza from "./Pizza";
import {buy} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";


class PizzaContainer extends React.Component {


    render() {

        return (

            <Pizza pizza={this.props.pizza} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state) => {

    return {
        pizza: state.pizzaPage.pizza
    }


}


export default compose(
    connect(mapStateToprops, {buy}),
)(PizzaContainer)




