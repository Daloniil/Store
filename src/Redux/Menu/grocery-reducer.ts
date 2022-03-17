import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId33 from "../../Assets/Sous/160594-removebg-preview.webp";
import photoId34 from "../../Assets/Sous/160600-removebg-preview.webp";
import photoId35 from "../../Assets/Sous/160611-removebg-preview.webp";
import photoId36 from "../../Assets/Sous/160612-removebg-preview.webp";
import photoId37 from "../../Assets/Sous/160931-removebg-preview.webp";
import photoId38 from "../../Assets/Sous/160933-removebg-preview.webp";
import photoId39 from "../../Assets/Sous/160934-removebg-preview.webp";
import photoId40 from "../../Assets/Sous/161021-removebg-preview.webp";
import photoId41 from "../../Assets/Sous/161223-removebg-preview.webp";
import photoId42 from "../../Assets/Sous/161228-removebg-preview.webp";
import photoId43 from "../../Assets/Sous/161346-removebg-preview.webp";
import photoId44 from "../../Assets/Sous/161740-removebg-preview.webp";
import photoId45 from "../../Assets/Sous/161742-removebg-preview.webp";
import photoId46 from "../../Assets/Sous/161781-removebg-preview.webp";
import photoId47 from "../../Assets/Sous/161849-removebg-preview.webp";
import photoId48 from "../../Assets/Sous/161881-removebg-preview.webp";
import photoId49 from "../../Assets/Sous/161884-removebg-preview.webp";
import photoId50 from "../../Assets/Sous/161989-removebg-preview.webp";
import photoId51 from "../../Assets/Sous/162095-removebg-preview.webp";
import photoId52 from "../../Assets/Sous/162116-removebg-preview.webp";
import photoId53 from "../../Assets/Sous/162313-removebg-preview.webp";
import photoId54 from "../../Assets/Sous/162374-removebg-preview.webp";
import photoId55 from "../../Assets/Sous/163320-removebg-preview.webp";
import photoId56 from "../../Assets/Sous/163564-removebg-preview.webp";
import photoId57 from "../../Assets/Sous/163687-removebg-preview.webp";
import photoId58 from "../../Assets/Sous/165149-removebg-preview.webp";
import photoId59 from "../../Assets/Sous/165566-removebg-preview.webp";
import photoId60 from "../../Assets/Sous/165569-removebg-preview.webp";
import photoId61 from "../../Assets/Sous/165573-removebg-preview.webp";
import photoId62 from "../../Assets/Sous/166270-removebg-preview.webp";
import photoId63 from "../../Assets/Sous/166333-removebg-preview.webp";
import photoId64 from "../../Assets/Sous/167436-removebg-preview.webp";
import photoId65 from "../../Assets/Sous/167444-removebg-preview.webp";
import photoId66 from "../../Assets/Sous/167464-removebg-preview.webp";
import photoId67 from "../../Assets/Sous/167481-removebg-preview.webp";
import photoId68 from "../../Assets/Sous/220572-removebg-preview.webp";
import photoId69 from "../../Assets/Sous/220573-removebg-preview.webp";
import photoId70 from "../../Assets/Sous/220582-removebg-preview.webp";
import photoId71 from "../../Assets/Sous/220616-removebg-preview.webp";
import photoId72 from "../../Assets/Sous/223570-removebg-preview.webp";
import photoId73 from "../../Assets/Sous/225812-removebg-preview.webp";
import photoId74 from "../../Assets/Sous/225813-removebg-preview.webp";
import photoId75 from "../../Assets/Sous/225814-removebg-preview.webp";
import photoId76 from "../../Assets/Sous/225815-removebg-preview.webp";

let initialState = {
  grocery: [
    {
      id: 70,
      photoURL: photoId33,
      name: "Сирний",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 71,
      photoURL: photoId34,
      name: "Часниковий",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 72,
      photoURL: photoId35,
      name: "Чилі гострий",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 73,
      photoURL: photoId36,
      name: "Барбекю",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 74,
      photoURL: photoId37,
      name: "Кисло-солодкий",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 75,
      photoURL: photoId38,
      name: "Тартар",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 76,
      photoURL: photoId39,
      name: "Паприка",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 77,
      photoURL: photoId40,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 78,
      photoURL: photoId41,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 79,
      photoURL: photoId42,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 80,
      photoURL: photoId43,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 81,
      photoURL: photoId44,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 82,
      photoURL: photoId45,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 83,
      photoURL: photoId46,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 84,
      photoURL: photoId47,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 85,
      photoURL: photoId48,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 86,
      photoURL: photoId49,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 87,
      photoURL: photoId50,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 88,
      photoURL: photoId51,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 89,
      photoURL: photoId52,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 90,
      photoURL: photoId53,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 91,
      photoURL: photoId54,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 92,
      photoURL: photoId55,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 93,
      photoURL: photoId56,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 94,
      photoURL: photoId57,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 95,
      photoURL: photoId58,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 96,
      photoURL: photoId59,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 97,
      photoURL: photoId60,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 98,
      photoURL: photoId61,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 99,
      photoURL: photoId62,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 100,
      photoURL: photoId63,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 101,
      photoURL: photoId64,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 102,
      photoURL: photoId65,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 103,
      photoURL: photoId66,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 104,
      photoURL: photoId67,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 105,
      photoURL: photoId68,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 106,
      photoURL: photoId69,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 107,
      photoURL: photoId70,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 108,
      photoURL: photoId71,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 109,
      photoURL: photoId72,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 110,
      photoURL: photoId73,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 111,
      photoURL: photoId74,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 112,
      photoURL: photoId75,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
    {
      id: 113,
      photoURL: photoId76,
      name: "Французький",
      cost: 10,
      structure: "",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const sousReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETSOUS": {
      return <initialStateType>{
        ...state,
        grocery: [...state.grocery, action.sous],
      };
    }
    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  setsousAC: (sous: Array<initialStateType>) => {
    return {
      type: "SETSOUS",
      sous: sous,
    } as const;
  },
};

export default sousReducer;
