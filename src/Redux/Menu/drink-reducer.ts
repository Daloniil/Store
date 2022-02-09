import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";
import photoId21 from "../../Assets/Drink/140770-removebg-preview.webp";
import photoId22 from "../../Assets/Drink/140771-removebg-preview.webp";
import photoId23 from "../../Assets/Drink//148617-removebg-preview.webp";
import photoId24 from "../../Assets/Drink/148632-removebg-preview.webp";
import photoId25 from "../../Assets/Drink/149879-removebg-preview.webp";
import photoId26 from "../../Assets/Drink/197680-removebg-preview.webp";
import photoId27 from "../../Assets/Drink/204721-removebg-preview.webp";
import photoId28 from "../../Assets/Drink/208933-removebg-preview.webp";
import photoId29 from "../../Assets/Drink/235866-removebg-preview.webp";
import photoId30 from "../../Assets/Drink/235870-removebg-preview.webp";
import photoId31 from "../../Assets/Drink/240039-removebg-preview.webp";
import photoId32 from "../../Assets/Drink/240059-removebg-preview.webp";
import photoId33 from "../../Assets/Drink/240081-removebg-preview.webp";
import photoId34 from "../../Assets/Drink/242535-removebg-preview.webp";
import photoId35 from "../../Assets/Drink/242545-removebg-preview.webp";
import photoId36 from "../../Assets/Drink/243722-removebg-preview.webp";
import photoId37 from "../../Assets/Drink/243995-removebg-preview.webp";
import photoId38 from "../../Assets/Drink/244002-removebg-preview.webp";
import photoId39 from "../../Assets/Drink/86466-removebg-preview.webp";
import photoId40 from "../../Assets/Drink/92969-removebg-preview.webp";

let initialState = {
  drink: [
    {
      id: 31,
      photoURL: photoId21,
      name: "Сік яблучно-гранатовий 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 32,
      photoURL: photoId22,
      name: "Pepsi 1 л",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 33,
      photoURL: photoId23,
      name: "Сік мульти-вітамінний 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 34,
      photoURL: photoId24,
      name: "Сік яблучно-виноградний 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 35,
      photoURL: photoId25,
      name: "Сік мульти-фруктовий 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 36,
      photoURL: photoId26,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 37,
      photoURL: photoId27,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 38,
      photoURL: photoId28,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 39,
      photoURL: photoId29,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 40,
      photoURL: photoId30,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 41,
      photoURL: photoId31,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 42,
      photoURL: photoId32,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 43,
      photoURL: photoId33,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 44,
      photoURL: photoId34,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 45,
      photoURL: photoId35,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 46,
      photoURL: photoId36,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 47,
      photoURL: photoId37,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 48,
      photoURL: photoId38,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 49,
      photoURL: photoId39,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 50,
      photoURL: photoId40,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const drinkReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETDRINK": {
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
  setdrinkAC: (drink: Array<initialStateType>) => {
    return {
      type: "SETDRINK",
      drink,
    } as const;
  },
};

export default drinkReducer;
