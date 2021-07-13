import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import pizzaReducer from "./Menu/pizza-reducer";
import sneksReducer from "./Menu/sneks-reducer"
import drinkReducer from "./Menu/drink-reducer";
import sousReducer from "./Menu/sous-reducer";
import newPizzaReducer from "./NewMenu/new-pizza-reducer";
import newSnekReducer from "./NewMenu/new-snek-reducer";
import newDrinkReducer from "./NewMenu/new-drink-reducer";
import laterSeen from "./later-seen-reducer";
import thunkMiddleware from "redux-thunk"
import buyItem from "./buy-item-reducer";
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    pizzaPage: pizzaReducer,
    sneksPage: sneksReducer,
    drinkPage: drinkReducer,
    sousPage: sousReducer,
    newPizzaPage: newPizzaReducer,
    newSnekPage: newSnekReducer,
    newDrinkPage: newDrinkReducer,
    laterSeenPage: laterSeen,
    BuyPage: buyItem,
    form: formReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)))


window.__store__ = store
export default store;