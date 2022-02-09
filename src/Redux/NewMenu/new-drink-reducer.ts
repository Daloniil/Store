import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId49 from "../../Assets/Drink/140770-removebg-preview.webp";
import photoId50 from "../../Assets/Drink/140771-removebg-preview.webp";
import photoId51 from "../../Assets/Drink/148617-removebg-preview.webp";
import photoId52 from "../../Assets/Drink/148632-removebg-preview.webp";

let initialState = {
  drink: [
    {
      id: 122,
      photoURL: photoId49,
      name: "Сік яблучно-гранатовий 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 123,
      photoURL: photoId50,
      name: "Pepsi 1 л",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 124,
      photoURL: photoId51,
      name: "Сік мульти-вітамінний 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 125,
      photoURL: photoId52,
      name: "Сік яблучно-виноградний 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const newDrinkReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "NEWDRINK": {
      return <initialStateType>{
        ...state,
        drink: [...state.drink, ...action.drink],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  newdrinkAC: (drink: Array<initialStateType>) => {
    return {
      type: "NEWDRINK",
      drink,
    } as const;
  },
};

export default newDrinkReducer;
