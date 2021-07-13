import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Checkout from "./Checkout";


class Chekoutontainer extends React.Component {


    render() {


        return (

            <Checkout/>
        )
    }
}


let mapStateToprops = (state) => {

    return {}


}

export default compose(
    connect(mapStateToprops, {}),
)(Chekoutontainer)




