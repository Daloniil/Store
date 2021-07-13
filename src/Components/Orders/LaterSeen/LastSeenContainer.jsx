import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import LastSeen from "./LastSeen";


class LastSeenContainer extends React.Component {


    render() {

        return (

            <LastSeen item={this.props.item}/>
        )
    }
}


let mapStateToprops = (state) => {


    return {
        item: state.laterSeenPage.item


    }


}

export default compose(
    connect(mapStateToprops, {}),
)(LastSeenContainer)




