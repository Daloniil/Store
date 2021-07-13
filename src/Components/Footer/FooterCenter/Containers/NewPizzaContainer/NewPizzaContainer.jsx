import React from 'react';
import {newpizzaAC} from "../../../../../Redux/NewMenu/new-pizza-reducer";
import {connect} from "react-redux";
import NewPizza from "./NewPizza";


let mapDispatchToProps = (dispatch) => {

    return {
        setUser: (users) => {
            dispatch(newpizzaAC(users));
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
