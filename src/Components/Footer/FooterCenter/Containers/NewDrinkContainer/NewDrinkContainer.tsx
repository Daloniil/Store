import React from 'react';
import {connect} from "react-redux";
import NewDrink from "./NewDrink";
import {actions} from "../../../../../Redux/NewMenu/new-drink-reducer";
import {AppStateType} from "../../../../../Redux/redux-store";


let mapStateToprops = (state: AppStateType) => {

    return {
        drink: state.newDrinkPage.drink
    }


}

const NewDrinkContainer = connect(mapStateToprops, {newdrinkAC: actions.newdrinkAC})(NewDrink);
export default NewDrinkContainer
