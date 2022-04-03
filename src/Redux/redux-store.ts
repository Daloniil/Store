import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import pizzaReducer from "./Menu/sweets-reducer";
import sneksReducer from "./Menu/dairy-reducer";
import drinkReducer from "./Menu/drink-reducer";
import sousReducer from "./Menu/grocery-reducer";
import newPizzaReducer from "./PopularProduct/new-sweets-reducer";
import newSnekReducer from "./PopularProduct/new-dairy-reducer";
import newDrinkReducer from "./PopularProduct/new-drink-reducer";
import laterSeen from "./later-seen-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import buyItem from "./buy-item-reducer";
import { reducer as formReducer } from "redux-form";

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

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

export type actionsType<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.__store__ = store;
export default store;
