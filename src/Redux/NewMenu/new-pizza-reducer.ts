import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId41 from "../../Assets/Pizza/164034-removebg-preview.webp";
import photoId42 from "../../Assets/Pizza/164048-removebg-preview.webp";
import photoId43 from "../../Assets/Pizza/164051-removebg-preview.webp";
import photoId44 from "../../Assets/Pizza/164697-removebg-preview.webp";

let initialState = {
  pizza: [
    {
      id: 114,
      photoURL: photoId41,
      name: "Печиво Тіволі Грушеве",
      cost: 150,
      structure:
        "Печиво Тіволі грушеве - печиво з карамельними Кранчами, молочним шоколадом і шматочками груші в круглій бляшаній коробці",
      amount: 1,
    },
    {
      id: 115,
      photoURL: photoId42,
      name: "Шоколад NUT SELECTION",
      cost: 62,
      structure: "Молочний шоколад (77%) з мигдалем (23%).",
      amount: 1,
    },
    {
      id: 116,
      photoURL: photoId43,
      name: "Шоколад чорний з начинкою марципан",
      cost: 64,
      structure:
        "Чорний шоколад з марципаном - чорний шоколад з вишуканим 100% -м марципаном",
      amount: 1,
    },
    {
      id: 117,
      photoURL: photoId44,
      name: "Хрусткі фігурки 'Kresko'",
      cost: 55,
      structure: "Хрусткі фігурки з банановим смаком.",
      amount: 1,
    },
  ] as Array<ReducerType>,
  siza: 28 as number,
  ves: 370 as number,
};

export type initialStateType = typeof initialState;

const newPizzaReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "NEWPIZZA": {
      return <initialStateType>{
        ...state,
        pizza: [...state.pizza, ...action.pizza],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  newpizzaAC: (pizza: Array<initialStateType>) => {
    return {
      type: "NEWPIZZA",
      pizza: pizza,
    } as const;
  },
};

export default newPizzaReducer;
