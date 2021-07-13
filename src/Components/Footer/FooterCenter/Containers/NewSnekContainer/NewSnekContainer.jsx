import React from 'react';
import {connect} from "react-redux";
import NewSnek from "./NewSnek";
import {newsnekAC} from "../../../../../Redux/NewMenu/new-snek-reducer";


let mapDispatchToProps = (dispatch) => {

    return {
        setUser: (users) => {
            dispatch(newsnekAC(users));
        },

    }

}

let mapStateToprops = (state) => {

    return {
        snek: state.newSnekPage.snek
    }


}

const NewSnekContainer = connect(mapStateToprops, mapDispatchToProps)(NewSnek);
export default NewSnekContainer
