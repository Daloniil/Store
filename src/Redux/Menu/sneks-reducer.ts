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
      name: "Картопляні медальйони",
      cost: 54,
      structure: "Порція картопляних медальйонів 350 г.",
      amount: 1,
    },
    {
      id: 52,
      photoURL: photoId21,
      name: "Картопляні кульки",
      cost: 36,
      structure: "Велика порція картопляних кульок 20 шт",
      amount: 1,
    },
    {
      id: 53,
      photoURL: photoId22,
      name: "М’ясні нагетси 9 шт",
      cost: 72,
      structure: "Велика порція м'ясні нагетси 9 шт",
      amount: 1,
    },
    {
      id: 54,
      photoURL: photoId23,
      name: "Куряча ніжка 4 шт",
      cost: 88,
      structure: "Середня порція курячих ніжок 2 шт",
      amount: 1,
    },
    {
      id: 55,
      photoURL: photoId24,
      name: "Сирні палички",
      cost: 88,
      structure: "Велика порція сирних паличок 8 шт",
      amount: 1,
    },
    {
      id: 56,
      photoURL: photoId25,
      name: "Картопля зі спеціями",
      cost: 53,
      structure: "Велика порція картоплі зі спеціями 300г",
      amount: 1,
    },
    {
      id: 57,
      photoURL: photoId26,
      name: "М’ясні нагетси 6 шт",
      cost: 47,
      structure: "Середня порція м'ясні нагетси 6 шт",
      amount: 1,
    },
    {
      id: 58,
      photoURL: photoId27,
      name: "Картопляні діпи",
      cost: 44,
      structure: "Велика порція картопляних діпів 230 г",
      amount: 1,
    },
    {
      id: 59,
      photoURL: photoId28,
      name: "Куряча ніжка 2 шт",
      cost: 48,
      structure: "Середня порція курячих ніжок 2 шт",
      amount: 1,
    },
    {
      id: 60,
      photoURL: photoId29,
      name: "Цибулеві кільця",
      cost: 42,
      structure: "Велика порція цибулевих кілець 10 шт",
      amount: 1,
    },
    {
      id: 61,
      photoURL: photoId30,
      name: "Сирні Кульки",
      cost: 95,
      structure: "Велика порція сирних кульок 10 шт",
      amount: 1,
    },
    {
      id: 62,
      photoURL: photoId31,
      name: "М’ясні стріпси 6 шт",
      cost: 83,
      structure: "Середня порція м'ясних стріпсів 6шт",
      amount: 1,
    },
    {
      id: 63,
      photoURL: photoId32,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
    {
      id: 64,
      photoURL: photoId33,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
    {
      id: 65,
      photoURL: photoId34,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
    {
      id: 66,
      photoURL: photoId35,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
    {
      id: 67,
      photoURL: photoId36,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
    {
      id: 68,
      photoURL: photoId37,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
    {
      id: 69,
      photoURL: photoId38,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
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
