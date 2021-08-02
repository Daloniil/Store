import {AppStateType} from "../Redux/redux-store";
import {createSelector} from "reselect";

export const newdrink = (state: AppStateType) => {
    return state.newDrinkPage.drink

}

export const getnewdrink = createSelector(newdrink, (newdrink) => {
    return newdrink

})

export const newpizza = (state: AppStateType) => {
    return state.newPizzaPage.pizza

}

export const getnnewpizza = createSelector(newpizza, (newpizza) => {
    return newpizza

})


export const newsneks = (state: AppStateType) => {
    return state.newSnekPage.snek

}

export const getnewsneks = createSelector(newsneks, (newsneks) => {
    return newsneks

})

export const pizza = (state: AppStateType) => {
    return state.pizzaPage.pizza

}

export const getpizza = createSelector(pizza, (pizza) => {
    return pizza

})

export const drink = (state: AppStateType) => {
    return state.drinkPage.drink

}

export const getdrinks = createSelector(drink, (drink) => {
    return drink

})

export const sneks = (state: AppStateType) => {
    return state.sneksPage.sneks

}

export const getsneks = createSelector(sneks, (sneks) => {
    return sneks

})

export const sous = (state: AppStateType) => {
    return state.sousPage.sous

}

export const getsous = createSelector(sous, (sous) => {
    return sous

})


export const ves = (state: AppStateType) => {
    return state.pizzaPage.ves

}

export const getves = createSelector(ves, (ves) => {
    return ves

})

export const size = (state: AppStateType) => {
    return state.pizzaPage.siza

}

export const getsize = createSelector(size, (size) => {
    return size

})