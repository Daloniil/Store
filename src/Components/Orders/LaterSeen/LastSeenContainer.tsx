import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import LastSeen from "./LastSeen";
import {AppStateType} from "../../../Redux/redux-store";
import {ItemType} from "../../../Types/Type";


type Props = {
    item: Array<ItemType>
}


class LastSeenContainer extends React.Component <Props> {


    render() {

        return (

            <LastSeen item={this.props.item}/>
        )
    }
}


let mapStateToprops = (state: AppStateType) => {


    return {
        item: state.laterSeenPage.item


    }


}

export default compose(
    connect(mapStateToprops, {}),
)(LastSeenContainer)




