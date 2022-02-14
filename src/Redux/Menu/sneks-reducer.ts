import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId20 from "../../Assets/Sneks/215041-removebg-preview.webp";
import photoId21 from "../../Assets/Sneks/219337-removebg-preview.webp";
import photoId22 from "../../Assets/Sneks/220828-removebg-preview.webp";
import photoId23 from "../../Assets/Sneks/220832-removebg-preview.webp";
import photoId24 from "../../Assets/Sneks/220838-removebg-preview.webp";
import photoId25 from "../../Assets/Sneks/220839-removebg-preview.webp";
import photoId26 from "../../Assets/Sneks/220840-removebg-preview.webp";
import photoId27 from "../../Assets/Sneks/220842-removebg-preview.webp";
import photoId28 from "../../Assets/Sneks/220843-removebg-preview.webp";
import photoId29 from "../../Assets/Sneks/220845-removebg-preview.webp";
import photoId30 from "../../Assets/Sneks/220858-removebg-preview.webp";
import photoId31 from "../../Assets/Sneks/220859-removebg-preview.webp";
import photoId32 from "../../Assets/Sneks/220860-removebg-preview.webp";
import photoId33 from "../../Assets/Sneks/220861-removebg-preview.webp";
import photoId34 from "../../Assets/Sneks/220864-removebg-preview.webp";
import photoId35 from "../../Assets/Sneks/220865-removebg-preview.webp";
import photoId36 from "../../Assets/Sneks/220866-removebg-preview.webp";
import photoId37 from "../../Assets/Sneks/220867-removebg-preview.webp";
import photoId38 from "../../Assets/Sneks/220868-removebg-preview.webp";

let initialState = {
  sneks: [
    {
      id: 51,
      photoURL: photoId20,
      name: "Молоко пастеризоване",
      cost: 28,
      structure:
        "Термін зберігання в закритий упаковці при температурі до 25°С не більше 90 діб.",
      amount: 1,
    },
    {
      id: 52,
      photoURL: photoId21,
      name: "Вершки стерилізовані ",
      cost: 27,
      structure:
        "Вершки 'Простоквашино' 15 % з коров'ячого молока, містять в 5 - 6 разів вітамінів А, ніж звичайне молоко. Вершки 'Простоквашино' -прекрасний компонент для вишуканих соусів та десертів. ",
      amount: 1,
    },
    {
      id: 53,
      photoURL: photoId22,
      name: "Вершки пастеризовані",
      cost: 23,
      structure:
        "Вершки ультрапастеризованное 'На Здоровья', 200 г 10% жирность",
      amount: 1,
    },
    {
      id: 54,
      photoURL: photoId23,
      name: "Вершки пастеризовані",
      cost: 48,
      structure: "Сливки ультрапастеризованное 'Буренка', 200 г 33% жирность",
      amount: 1,
    },
    {
      id: 55,
      photoURL: photoId24,
      name: "Вершки пастеризовані",
      cost: 88,
      structure: "Сливки ультрапастеризованное 'Кулинарные', 1000 г 10% жира",
      amount: 1,
    },
    {
      id: 56,
      photoURL: photoId25,
      name: "Вершки пастеризовані",
      cost: 115,
      structure: "Сливки ультрапастеризованное 'Кулинарные', 1000 г 18% жира",
      amount: 1,
    },
    {
      id: 57,
      photoURL: photoId26,
      name: "Вершки пастеризовані",
      cost: 165,
      structure: "Сливки ультрапастеризованное 'Кулинарные', 1000 г 30% жира",
      amount: 1,
    },
    {
      id: 58,
      photoURL: photoId27,
      name: "Вершки пастеризовані",
      cost: 21,
      structure: "Сливки ультрапастеризованное 'Буренка', 200 г 10% жирность",
      amount: 1,
    },
    {
      id: 59,
      photoURL: photoId28,
      name: "Вершки пастеризовані",
      cost: 57,
      structure: "Сливки ультрапастеризованное 'Буренка', 200 г 15% жирность",
      amount: 1,
    },
    {
      id: 60,
      photoURL: photoId29,
      name: "Вершки пастеризовані",
      cost: 72,
      structure: "Сливки ультрапастеризованное 'Селянські', 500 г 20% жирность",
      amount: 1,
    },
    {
      id: 61,
      photoURL: photoId30,
      name: "Молоко 'Cелянське'",
      cost: 60,
      structure:
        "1500 г. 2.5% жирність. Термін зберігання в закритий упаковці при температурі до 25°С не більше 180 діб.",
      amount: 1,
    },
    {
      id: 62,
      photoURL: photoId31,
      name: "Молоко 'Cелянське'",
      cost: 65,
      structure:
        "1500 г. 3.2% жирність. Термін зберігання в закритий упаковці при температурі до 25°С не більше 180 діб.",
      amount: 1,
    },
    {
      id: 63,
      photoURL: photoId32,
      name: "Молоко 'Cелянське'",
      cost: 70,
      structure:
        "2000 г. 2.5% жирність. Термін зберігання в закритий упаковці при температурі до 25°С не більше 180 діб.",
      amount: 1,
    },
    {
      id: 64,
      photoURL: photoId33,
      name: "Молоко 'Cелянське'",
      cost: 75,
      structure:
        "2000 г. 3.2% жирність. Термін зберігання в закритий упаковці при температурі до 25°С не більше 180 діб.",
      amount: 1,
    },
    {
      id: 65,
      photoURL: photoId34,
      name: "Молоко пастеризоване",
      cost: 40,
      structure:
        "1000 г. 2.5% жирність. Термін зберігання в закритий упаковці при температурі до 25°С не більше 180 діб.",
      amount: 1,
    },
    {
      id: 66,
      photoURL: photoId35,
      name: "Молоко пастеризоване",
      cost: 46,
      structure:
        "1000 г. 3.2% жирність. Термін зберігання в закритий упаковці при температурі до 25°С не більше 180 діб.",
      amount: 1,
    },
    {
      id: 67,
      photoURL: photoId36,
      name: "Коктейль молочний",
      cost: 15,
      structure:
        "Коктейль молочний зі смаком полуниці 'Міньйони', 200 г 2,0 % жирність",
      amount: 1,
    },
    {
      id: 68,
      photoURL: photoId37,
      name: "Коктейль молочний",

      cost: 17,
      structure:
        "Коктейль молочний зі смаком шоколаду 'Міньйони', 200 г 2,0 % жирність",
      amount: 1,
    },
    {
      id: 69,
      photoURL: photoId38,
      name: "Коктейль молочний",
      cost: 16,
      structure:
        "Коктейль молочний зі смаком вершковий пломбир 'Міньйони', 200 г 2,0 % жирність",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const sneksReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETSNEKS": {
      return <initialStateType>{
        ...state,
        sneks: [...state.sneks, ...action.sneks],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  setsnekAC: (sneks: Array<initialStateType>) => {
    return {
      type: "SETSNEKS",
      sneks: sneks,
    } as const;
  },
};

export default sneksReducer;
