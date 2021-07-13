import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import SliderItem from "./SliderItem";


class SliderItemContainer extends React.Component {


    render() {

        return (
            <div>
                <SliderItem
                    pizza={this.props.pizza}
                    drink={this.props.drink}
                    sneks={this.props.sneks}
                    sous={this.props.sous}
                    number={this.props.match.params.id}
                />
            </div>

        )
    }
}


let mapStateToprops = (state) => {

    return {
        pizza: state.pizzaPage.pizza,
        drink: state.drinkPage.drink,
        sneks: state.sneksPage.sneks,
        sous: state.sousPage.sous,


    }


}

export default compose(
    connect(mapStateToprops, {}),
    withRouter,
)(SliderItemContainer)




