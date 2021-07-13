import React from 'react';
import Sneks from "./Sneks";
import {connect} from "react-redux";
import {buy} from "../../../../Redux/buy-item-reducer";
import {compose} from "redux";


class SneksContainer extends React.Component {


    render() {

        return (

            <Sneks sneks={this.props.sneks} buy={this.props.buy}/>
        )
    }
}

let mapStateToprops = (state) => {

    return {
        sneks: state.sneksPage.sneks

    }


}


export default compose(
    connect(mapStateToprops, {buy}),
)(SneksContainer)




