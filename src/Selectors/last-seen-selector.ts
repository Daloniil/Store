import {AppStateType} from "../Redux/redux-store";
import {createSelector} from "reselect";

export const lastitem = (state: AppStateType) => {
    return state.laterSeenPage.item

}

export const getlastitem = createSelector(lastitem, (lastitem) => {
    return lastitem

})
