import React from 'react';
import {connect} from "react-redux";
import NewDrink from "./NewDrink";
import {actions} from "../../../../../Redux/NewMenu/new-drink-reducer";


let mapDispatchToProps = (dispatch) => {

    return {
        setUser: (users) => {
            dispatch(actions.newdrinkAC(users));
        },

    }

}

let mapStateToprops = (state) => {

    return {
        drink: state.newDrinkPage.drink
    }


}

const NewDrinkContainer = connect(mapStateToprops, mapDispatchToProps)(NewDrink);
export default NewDrinkContainer
