import React from 'react';
import {actions} from "../../../../../Redux/NewMenu/new-pizza-reducer";
import {connect} from "react-redux";
import NewPizza from "./NewPizza";
import {AppStateType} from "../../../../../Redux/redux-store";


let mapStateToprops = (state: AppStateType) => {

    return {
        pizza: state.newPizzaPage.pizza
    }


}

const NewPizzaContainer = connect(mapStateToprops, {newpizzaAC: actions.newpizzaAC})(NewPizza);
export default NewPizzaContainer
