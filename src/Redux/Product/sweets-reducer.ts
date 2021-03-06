import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId1 from "../../Assets/Pizza/164034-removebg-preview.webp";
import photoId2 from "../../Assets/Pizza/164048-removebg-preview.webp";
import photoId3 from "../../Assets/Pizza/164051-removebg-preview.webp";
import photoId4 from "../../Assets/Pizza/164697-removebg-preview.webp";
import photoId5 from "../../Assets/Pizza/165045-removebg-preview.webp";
import photoId6 from "../../Assets/Pizza/165187-removebg-preview.webp";
import photoId7 from "../../Assets/Pizza/165248-removebg-preview.webp";
import photoId8 from "../../Assets/Pizza/165253-removebg-preview.webp";
import photoId9 from "../../Assets/Pizza/165257-removebg-preview.webp";
import photoId10 from "../../Assets/Pizza/165442-removebg-preview.webp";
import photoId11 from "../../Assets/Pizza/165804-removebg-preview.webp";
import photoId12 from "../../Assets/Pizza/165807-removebg-preview.webp";
import photoId13 from "../../Assets/Pizza/165810-removebg-preview.webp";
import photoId14 from "../../Assets/Pizza/166150-removebg-preview.webp";
import photoId15 from "../../Assets/Pizza/166567-removebg-preview.webp";
import photoId16 from "../../Assets/Pizza/166578-removebg-preview.webp";
import photoId17 from "../../Assets/Pizza/166686-removebg-preview.webp";
import photoId18 from "../../Assets/Pizza/197921-removebg-preview.webp";
import photoId19 from "../../Assets/Pizza/206880-removebg-preview.webp";
import photoId20 from "../../Assets/Pizza/206894-removebg-preview.webp";
import photoId21 from "../../Assets/Pizza/206897-removebg-preview.webp";
import photoId22 from "../../Assets/Pizza/206905-removebg-preview.webp";
import photoId23 from "../../Assets/Pizza/210079-removebg-preview.webp";
import photoId24 from "../../Assets/Pizza/216244-removebg-preview.webp";
import photoId25 from "../../Assets/Pizza/216245-removebg-preview.webp";
import photoId26 from "../../Assets/Pizza/216246-removebg-preview.webp";
import photoId27 from "../../Assets/Pizza/224769-removebg-preview.webp";
import photoId28 from "../../Assets/Pizza/232852-removebg-preview.webp";
import photoId29 from "../../Assets/Pizza/233926-removebg-preview.webp";
import photoId30 from "../../Assets/Pizza/img_217710-removebg-preview.webp";

let initialState = {
  sweets: [
    {
      id: 1,
      photoURL: photoId1,
      name: "???????????? ?????????????? 232 ??",
      cost: 160,
      structure:
        "???? ?????????????????????? ???????????? ?? ?????????? ?????????? ????????????????: ?????????????? ???????????? ???????????????? ?? ??????????????, ????????-???????????????? ?? ?????????????????? ?? ?????????????????? ???????? ?? ???????????? ????????????????.",
      amount: 1,
    },
    {
      id: 2,
      photoURL: photoId2,
      name: "Ferrero Rocher 200 ??",
      cost: 220,
      structure:
        "Ferrero Rocher - ?????????????? ???????????????? ??????????????, ?????????????? ???????????????? ?????????????????? ???? ???????????????????????? ???????????????? ????????????????. ",
      amount: 1,
    },
    {
      id: 3,
      photoURL: photoId3,
      name: "Raffaello 240 ??",
      cost: 256,
      structure:
        "Raffaello ??? ???? ?????????????? ??????????????, ???????????? ?????????????????? ????????????????, ???? ???????????? ???????????? ???? ?????????? ???????????????????? ?????????????? ??????????????????.",
      amount: 1,
    },
    {
      id: 4,
      photoURL: photoId4,
      name: "Millennium ???????????? 100 ??",
      cost: 48,
      structure: "???????????? ?????????????? ?? ???????????? ???????????????? ????????????????.",
      amount: 1,
    },
    {
      id: 5,
      photoURL: photoId5,
      name: "?????????????????? ?????? 150 ??",
      cost: 115,
      structure: "?????????????????? ?????????????? ?? ?????????????? ?? ?????????????? ????????????????, ???? ??????????????",
      amount: 1,
    },
    {
      id: 6,
      photoURL: photoId6,
      name: "?????????? ?? ??????????????????",
      cost: 19,
      structure:
        "??????????????, ???? ?????????????????? ?? ?????????? ????????????, ?? ???????????????? ????????????????????, ?????? ?????????????????? ???????????????????????? ???????????????? ???????????? ??????????????????.",
      amount: 1,
    },
    {
      id: 7,
      photoURL: photoId7,
      name: "Millennium Gold 205 ??",
      cost: 120,
      structure:
        "?????????????????? ???????????????? ?????????? ?????????????????? ???????????????? Millennium Gold, ?????????? ?????????????? ?????????????? ?? ?????????????? ??????????????.",
      amount: 1,
    },
    {
      id: 8,
      photoURL: photoId8,
      name: "?????????? ???????????????? 250 ??",
      cost: 233,
      structure:
        "?????????? ?????????????? 4 ???????? ?????????????????? ????????????????: ?????????????????? ????????, ???????????????? ??????????????, ?????????????? ?????????? ?? ??????????????, ???????? ??????????????.",
      amount: 1,
    },
    {
      id: 9,
      photoURL: photoId9,
      name: "Millennium ?????????????? ????????????",
      cost: 170,
      structure:
        "Millennium Ocean Story - ???????????????? ?? ?????????????????? ???????????????? ?? ???????????? ???????????????? ?????????????? ?? ?????????????? ??????????????.",
      amount: 1,
    },
    {
      id: 10,
      photoURL: photoId10,
      name: "?????????? ?? ?????????????? 450 ??",
      cost: 40,
      structure:
        "?????????????? ???????????? ?? ????????????????-?????????????????? ???????????????? ?? ???????????????????? ???????????????????????? ?????????????????? ??????????????.",
      amount: 1,
    },
    {
      id: 11,
      photoURL: photoId11,
      name: "?????????????? Milka 90 ??",
      cost: 44,
      structure:
        "?????? ?????????? ???????????????? ?????????? ?????????????? ?????????????????????? ???????????????? ??????????????, ???????????????????????????? ?????????????????? ???????????????????? - ???????????? ?? ?????????? ????????",
      amount: 1,
    },
    {
      id: 12,
      photoURL: photoId12,
      name: "Milka ?? ?????????????? 90 ??",
      cost: 40,
      structure:
        "????????????, ???????????????? ?????????????? ?? ?????????????????????? ??????????????. ???????? ?? ????????, ?? ???? ?? ??????????.",
      amount: 1,
    },
    {
      id: 13,
      photoURL: photoId13,
      name: "Millennium ?? ???????????????? 100 ??",
      cost: 50,
      structure:
        "???????????? ???????????????? ?????????????? ?? ???????????????? ???????????????? ???????????????? Millennium Golden Nut - ??????????????, ???????????? ???????????????? ??????????????! ",
      amount: 1,
    },
    {
      id: 14,
      photoURL: photoId14,
      name: "?????????????? ???????????????????????? 100??",
      cost: 77,
      structure:
        "?????????????? ???????????? ?????????????????????? - ???? ?????????????????? ??????????????, ???????????????????????? ?? ?????????????????????? ?????????? ?????????? ?? ???????????????????????? ?????????? ??????????, ?????? ?????????? ?? ???????????????????? ???????????? ?????????????????????? ????????????.",
      amount: 1,
    },
    {
      id: 15,
      photoURL: photoId15,
      name: "Millennium Golden Nut 40 ?? ",
      cost: 22,
      structure:
        "?????????????? ???????????? Millennium Golden Nut ?? ???????????????? ???? ?????????? ?????????????? ??????????????",
      amount: 1,
    },
    {
      id: 16,
      photoURL: photoId16,
      name: "Milka ?? ????????-??????????????????",
      cost: 42,
      structure:
        "???????????? ???????????????? ?????????????? ?? ?????????????????? ???????????????? ???????? ?? ????????????????.",
      amount: 1,
    },
    {
      id: 17,
      photoURL: photoId17,
      name: "Lindt Excellence 85% ??????????",
      cost: 115,
      structure:
        "?????????????? ???????????????????????? ???????????? ???????????? 85% ?????????????? Lindt Excellence",
      amount: 1,
    },
    {
      id: 18,
      photoURL: photoId18,
      name: "???????????? ?? ??????????????????????",
      cost: 30,
      structure:
        "?????????? Roshen Wafers ?????????????? ??? ?????????????????????????? ?????????? ???? ???????????????????? ????????????????.",
      amount: 1,
    },
    {
      id: 19,
      photoURL: photoId19,
      name: "Roshen Assortment",
      cost: 77,
      structure:
        "Roshen Assortment Classic - ???????????? ?????????????? ?? ?????????????? ???????????????? ?? ??????????????????: ?????????? ??????????????, ?????????? ??????????????, ???????????? ??????????????, ????????-??????????.",
      amount: 1,
    },
    {
      id: 20,
      photoURL: photoId20,
      name: "???????????? ???? ????????",
      cost: 12,
      structure: "?????????????? ???????????? ?? ???????????????? ?????????????????? ????????????.",
      amount: 1,
    },

    {
      id: 21,
      photoURL: photoId21,
      name: "Multicake ??????????????????",
      cost: 20,
      structure:
        "?????????? ?????????????? ????????????-?????????????? ?? ???????????????? ???????????????? ???? ?????????????? ?????????????????????? ?????????? ?? ????????????.",
      amount: 1,
    },

    {
      id: 22,
      photoURL: photoId22,
      name: "Roshen ?? ?????????????? ?????????????? ",
      cost: 30,
      structure:
        "?????????????? Roshen - ?????????????????????? ???????????????????? ????????????'?? ??????????????, ???????????? - ?????????????? ???????????????? ????????-?????????? ?? ?????????????????? ??????????-?????????????? ???? ??????????????.",
      amount: 1,
    },

    {
      id: 23,
      photoURL: photoId23,
      name: "Waffeletten ?? ??????????????????",
      cost: 88,
      structure: "???????????????? ???????????? Waffeletten ?? ???????????? ?????????????????? 100?? ",
      amount: 1,
    },

    {
      id: 24,
      photoURL: photoId24,
      name: "ROSHEN WAFERS ??????????",
      cost: 30,
      structure:
        "?????????? Roshen Wafers ?????????? ??? ?????????????????????????? ?????????? ?? ?????????????????? ????????????????. ",
      amount: 1,
    },

    {
      id: 25,
      photoURL: photoId25,
      name: "ROSHEN WAFERS ????????????",
      cost: 25,
      structure:
        "?????????? Roshen Wafers ???????????? ??? ?????????????????????????? ?????????? ?? ???????????????? ????????????????. ",
      amount: 1,
    },

    {
      id: 26,
      photoURL: photoId26,
      name: "ROSHEN WAFERS ?????????????? ",
      cost: 32,
      structure:
        "?????????? Roshen Wafers ?????????????? ??? ?????????????????????????? ?????????? ???? ???????????????????? ????????????????.",
      amount: 1,
    },

    {
      id: 27,
      photoURL: photoId27,
      name: "KONAFETTO bianco 1????",
      cost: 135,
      structure:
        "?????????? ???????????????? ???????????????? ?? ???????????????????? ?????????????? ?? ???????????????? ???????????????? ???? ???????????? ?????????????????? ????????????.",
      amount: 1,
    },
    {
      id: 28,
      photoURL: photoId28,
      name: "???????????? 200??",
      cost: 110,
      structure:
        "?????????????? ?? ???????????????????? ?????????????? ?? ???????????????? ?? ???????????????????? ??????????????????  ???????????? ???? ????????????.",
      amount: 1,
    },
    {
      id: 29,
      photoURL: photoId29,
      name: "CoffeeLike ???? 1????",
      cost: 110,
      structure:
        "???????????????? Coffeelike Roshen ??? ?????????????? ???????????????? ?? ??????????????-?????????????? ????????????????, ?????????????? ???????????????? ?????????????????????? ????????.",
      amount: 1,
    },
    {
      id: 30,
      photoURL: photoId30,
      name: "Raffaello 150 ??.",
      cost: 140,
      structure:
        "Raffaello - ???? ?????????????? ??????????????, ???????????? ?????????????????? ????????????????, ???? ???????????? ???????????? ???? ?????????? ???????????????????? ?????????????? ??????????????????. ",
      amount: 1,
    },
  ] as Array<ReducerType>,
  siza: 28 as number,
  ves: 370 as number,
};

export type initialStateType = typeof initialState;

const pizzaReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETPIZZA": {
      return <initialStateType>{
        ...state,
        sweets: [...state.sweets, ...action.pizza],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  setpizzAC: (pizza: Array<initialStateType>) => {
    return {
      type: "SETPIZZA",
      pizza: pizza,
    } as const;
  },
};
export default pizzaReducer;
