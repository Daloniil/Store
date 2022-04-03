import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId49 from "../../Assets/Drink/140770-removebg-preview.webp";
import photoId50 from "../../Assets/Drink/140771-removebg-preview.webp";
import photoId51 from "../../Assets/Drink/148617-removebg-preview.webp";
import photoId52 from "../../Assets/Drink/148632-removebg-preview.webp";

let initialState = {
  drink: [
    {
      id: 31,
      photoURL: photoId49,
      name: "Карпатський 'М'ята' 20шт",
      cost: 18,
      structure:
        "М'ятний чай від торгової марки «Карпатський чай» - вдале поєднання неперевершеного аромату і приємного терпкого смаку. ",
      amount: 1,
    },
    {
      id: 32,
      photoURL: photoId50,
      name: "Hyleys 100шт",
      cost: 200,
      structure:
        "Hyleys – одна з небагатьох марок в Україні, яка має знак вищої якості «Лев з Мечем» Державної Чайної Ради Шрі-Ланки.",
      amount: 1,
    },
    {
      id: 33,
      photoURL: photoId51,
      name: "Ahmad Tea 100шт",
      cost: 145,
      structure: "Чай чорний Ahmad Tea Англійський до сніданку 100 шт х 2г ч",
      amount: 1,
    },
    {
      id: 34,
      photoURL: photoId52,
      name: "Ahmad Tea 100 шт",
      cost: 145,
      structure: "Чай чорний з бергамотом Ahmad Tea Граф Грей 100 шт х 2г",
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
