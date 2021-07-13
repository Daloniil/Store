import React from 'react';
import {connect} from "react-redux";
import Sous from "./Sous";
import {buy} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";


class SousContainer extends React.Component {


    render() {

        return (

            <Sous sous={this.props.sous} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state) => {

    return {
        sous: state.sousPage.sous


    }


}


export default compose(
    connect(mapStateToprops, {buy}),
)(SousContainer)




