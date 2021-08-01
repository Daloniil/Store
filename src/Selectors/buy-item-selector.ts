import {createSelector} from "reselect";
import {AppStateType} from "../Redux/redux-store";


export const item = (state: AppStateType) => {
    return state.BuyPage.item

}

export const getitem = createSelector(item, (item) => {
    return item

})

export const lenght = (state: AppStateType) => {
    return state.BuyPage.lenght

}

export const getlenght = createSelector(lenght, (lenght) => {
    return lenght

})

export const amoun = (state: AppStateType) => {
    return state.BuyPage.amoun

}

export const getamoun = createSelector(amoun, (amoun) => {
    return amoun

})