import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId45 from "../../Assets/Sneks/215041-removebg-preview.webp";
import photoId46 from "../../Assets/Sneks/219337-removebg-preview.webp";
import photoId47 from "../../Assets/Sneks/220828-removebg-preview.webp";
import photoId48 from "../../Assets/Sneks/220832-removebg-preview.webp";

let initialState = {
  dairy: [
    {
      id: 118,
      photoURL: photoId45,
      name: "Молоко пастеризоване",
      cost: 28,
      structure:
        "Вершки 'Простоквашино' 15 % з коров'ячого молока, містять в 5 - 6 разів вітамінів А, ніж звичайне молоко. Вершки 'Простоквашино' -прекрасний компонент для вишуканих соусів та десертів. ",
      amount: 1,
    },
    {
      id: 119,
      photoURL: photoId46,
      name: "Вершки стерилізовані",
      cost: 27,
      structure:
        "Вершки 'Простоквашино' 15 % з коров'ячого молока, містять в 5 - 6 разів вітамінів А, ніж звичайне молоко. Вершки 'Простоквашино' -прекрасний компонент для вишуканих соусів та десертів. ",
      amount: 1,
    },
    {
      id: 120,
      photoURL: photoId47,
      name: "Вершки пастеризовані",
      cost: 23,
      structure:
        "Вершки ультрапастеризованное 'На Здоровья', 200 г 10% жирность",
      amount: 1,
    },
    {
      id: 121,
      photoURL: photoId48,
      name: "Вершки пастеризовані",
      cost: 48,
      structure: "Сливки ультрапастеризованное 'Буренка', 200 г 33% жирность",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const newSnekReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "NEWSNEK": {
      return <initialStateType>{
        ...state,
        dairy: [...state.dairy, ...action.snek],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  newsnekAC: (snek: Array<initialStateType>) => {
    return {
      type: "NEWSNEK",
      snek: snek,
    } as const;
  },
};

export default newSnekReducer;
