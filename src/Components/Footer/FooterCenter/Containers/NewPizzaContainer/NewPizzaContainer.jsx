import React from 'react';
import {actions} from "../../../../../Redux/NewMenu/new-pizza-reducer";
import {connect} from "react-redux";
import NewPizza from "./NewPizza";


let mapDispatchToProps = (dispatch) => {

    return {
        setUser: (users) => {
            dispatch(actions.newpizzaAC(users));
        },

    }

}

let mapStateToprops = (state) => {

    return {
        pizza: state.newPizzaPage.pizza
    }


}

const NewPizzaContainer = connect(mapStateToprops, mapDispatchToProps)(NewPizza);
export default NewPizzaContainer
