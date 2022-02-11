import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId41 from "../../Assets/Pizza/164034-removebg-preview.webp";
import photoId42 from "../../Assets/Pizza/164048-removebg-preview.webp";
import photoId43 from "../../Assets/Pizza/164051-removebg-preview.webp";
import photoId44 from "../../Assets/Pizza/164697-removebg-preview.webp";

let initialState = {
  pizza: [
    {
      id: 1,
      photoURL: photoId41,
      name: "Світоч Стожари 232 г",
      cost: 160,
      structure:
        "Це ексклюзивне асорті з трьох видів шоколаду: цукерка десерт тірамісу в чорному, крем-карамель в молочному і кокосовий крем в білому шоколаді.",
      amount: 1,
    },
    {
      id: 2,
      photoURL: photoId42,
      name: "Ferrero Rocher 200 г",
      cost: 220,
      structure:
        "Ferrero Rocher - хрусткі вафельні цукерки, покриті молочним шоколадом та подрібненими лісовими горіхами. ",
      amount: 1,
    },
    {
      id: 3,
      photoURL: photoId43,
      name: "Raffaello 240 г",
      cost: 256,
      structure:
        "Raffaello — це хрустка цукерка, вкрита кокосовою стружкою, із ніжним кремом та цілим мигдальним горіхом всередині.",
      amount: 1,
    },
    {
      id: 4,
      photoURL: photoId44,
      name: "Millennium чорний 100 г",
      cost: 48,
      structure: "Чорний шоколад з цілими лісовими горіхами.",
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
