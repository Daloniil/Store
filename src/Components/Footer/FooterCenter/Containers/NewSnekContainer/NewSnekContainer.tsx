import React from 'react';
import {connect} from "react-redux";
import NewSnek from "./NewSnek";
import {actions} from "../../../../../Redux/NewMenu/new-snek-reducer";
import {AppStateType} from "../../../../../Redux/redux-store";


let mapStateToprops = (state: AppStateType) => {

    return {
        snek: state.newSnekPage.snek
    }


}

const NewSnekContainer = connect(mapStateToprops, {newsnekAC: actions.newsnekAC})(NewSnek);
export default NewSnekContainer
