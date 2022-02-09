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
  pizza: [
    {
      id: 1,
      photoURL: photoId1,
      name: "Печиво Тіволі Грушеве",
      cost: 150,
      structure:
        "Молочним шоколадом і шматочками груші в круглій бляшаній коробці",
      amount: 1,
    },
    {
      id: 2,
      photoURL: photoId2,
      name: "Шоколад NUT SELECTION",
      cost: 62,
      structure: "Молочний шоколад (77%) з мигдалем (23%). ",
      amount: 1,
    },
    {
      id: 3,
      photoURL: photoId3,
      name: "Шоколад з марципан",
      cost: 64,
      structure:
        "Чорний шоколад з марципаном - чорний шоколад з вишуканим 100% -м марципаном",
      amount: 1,
    },
    {
      id: 4,
      photoURL: photoId4,
      name: "Хрусткі фігурки 'Kresko'",
      cost: 55,
      structure: "Хрусткі фігурки з банановим смаком.",
      amount: 1,
    },
    {
      id: 5,
      photoURL: photoId5,
      name: "Цукерки Трюфель",
      cost: 45,
      structure: "Ніжна трюфельна начинка в тонкому корпусі з шоколаду.",
      amount: 1,
    },
    {
      id: 6,
      photoURL: photoId6,
      name: "Печиво-сендвіч Multicake",
      cost: 28,
      structure:
        "Ніжне цукрове печиво-сендвіч з кремовою начинкою та краплею полуничного джему в центрі.",
      amount: 1,
    },
    {
      id: 7,
      photoURL: photoId7,
      name: "Цукерка Korivka Roshen",
      cost: 53,
      structure:
        "Цукерки Korivka Roshen, корпус - молочна помадка із цукровою скоринкою.",
      amount: 1,
    },
    {
      id: 8,
      photoURL: photoId8,
      name: "Шоколад з мигдалем",
      cost: 45,
      structure:
        "Ніжний молочний шоколад Roshen із цілими смаженими ядрами мигдалю.",
      amount: 1,
    },
    {
      id: 9,
      photoURL: photoId9,
      name: "Шоколад Оленка",
      cost: 20,
      structure: "Молочний шоколад Оленка від Roshen, 90 грам.",
      amount: 1,
    },
    {
      id: 10,
      photoURL: photoId10,
      name: "Цукерка Червоний мак 1 Кг",
      cost: 200,
      structure:
        "Цукерки глазуровані шоколадною глазур'ю, корпус - праліне з додаванням льодяникової крихти.",
      amount: 1,
    },
    {
      id: 11,
      photoURL: photoId11,
      name: "Цукрове печиво До кави",
      cost: 14,
      structure: "Цукрове печиво До кави масло-ваніль",
      amount: 1,
    },
    {
      id: 12,
      photoURL: photoId12,
      name: "Вафельні рулети Waffeletten",
      cost: 88,
      structure:
        "Вафельні рулети Waffeletten з молочн шоколадом 100г ТМ Bahlsen",
      amount: 1,
    },
    {
      id: 13,
      photoURL: photoId13,
      name: "Печиво ZOO Country",
      cost: 68,
      structure: "Печиво ZOO Country 100 г ТМ Bahlsen",
      amount: 1,
    },
    {
      id: 14,
      photoURL: photoId14,
      name: "Цукерки Халлорен",
      cost: 189,
      structure: "Шоколадні цукерки Халлорен Десертна мрія 130 г",
      amount: 1,
    },
    {
      id: 15,
      photoURL: photoId15,
      name: "Шоклолад з какао-муссом",
      cost: 58,
      structure: "Молочний шоколад з начинкою какао-мусс 100г ",
      amount: 1,
    },
    {
      id: 16,
      photoURL: photoId16,
      name: "Шоклолад з кокосом",
      cost: 58,
      structure: "Молочний шоколад з начинкою кокос-молочний крем 100г ",
      amount: 1,
    },
    {
      id: 17,
      photoURL: photoId17,
      name: "Цукерки 'Мелодика' 1 КГ",
      cost: 105,
      structure:
        "Глазуровані помадні цукерки з ніжною желейною начинкою з персиковим соком.",
      amount: 1,
    },
    {
      id: 18,
      photoURL: photoId18,
      name: "Вафлі ROSHEN WAFERS",
      cost: 30,
      structure:
        "Вафлі Roshen Wafers Шоколад — неглазуровані вафлі із шоколадною начинкою.",
      amount: 1,
    },
    {
      id: 19,
      photoURL: photoId19,
      name: "Печиво До кави",
      cost: 21,
      structure:
        "Класичне печиво - не надто солодке,воно давно завоювало любов любителів кави",
      amount: 1,
    },
    {
      id: 20,
      photoURL: photoId20,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 21,
      photoURL: photoId21,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 22,
      photoURL: photoId22,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 23,
      photoURL: photoId23,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 24,
      photoURL: photoId24,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 25,
      photoURL: photoId25,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 26,
      photoURL: photoId26,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },

    {
      id: 27,
      photoURL: photoId27,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },
    {
      id: 28,
      photoURL: photoId28,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },
    {
      id: 29,
      photoURL: photoId29,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },
    {
      id: 30,
      photoURL: photoId30,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
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
        pizza: [...state.pizza, ...action.pizza],
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
