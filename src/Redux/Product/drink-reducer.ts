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
      name: "Карпатський 'М'ята' 20шт",
      cost: 18,
      structure:
        "М'ятний чай від торгової марки «Карпатський чай» - вдале поєднання неперевершеного аромату і приємного терпкого смаку. ",
      amount: 1,
    },
    {
      id: 32,
      photoURL: photoId22,
      name: "Hyleys 100шт",
      cost: 200,
      structure:
        "Hyleys – одна з небагатьох марок в Україні, яка має знак вищої якості «Лев з Мечем» Державної Чайної Ради Шрі-Ланки.",
      amount: 1,
    },
    {
      id: 33,
      photoURL: photoId23,
      name: "Ahmad Tea 100шт",
      cost: 145,
      structure: "Чай чорний Ahmad Tea Англійський до сніданку 100 шт х 2г ч",
      amount: 1,
    },
    {
      id: 34,
      photoURL: photoId24,
      name: "Ahmad Tea 100 шт",
      cost: 145,
      structure: "Чай чорний з бергамотом Ahmad Tea Граф Грей 100 шт х 2г",
      amount: 1,
    },
    {
      id: 35,
      photoURL: photoId25,
      name: "Hyleys 100шт",
      cost: 140,
      structure:
        "Чай зелений пакетований Hyleys 100шт х 2г.  ТМ Hyleys – одна з небагатьох марок в Україні, яка має знак вищої якості «Лев з Мечем» Державної Чайної Ради Шрі-Ланки",
      amount: 1,
    },
    {
      id: 36,
      photoURL: photoId26,
      name: "Jacobs Monarch 60 г",
      cost: 85,
      structure:
        "Незрівнянний Аромоксаміт розчинної кави Jacobs Monarch з кожною чашкою дарує багатство аромату і насичений смак натуральної кави. ",
      amount: 1,
    },
    {
      id: 37,
      photoURL: photoId27,
      name: "Jacobs Monarch 400 г",
      cost: 420,
      structure:
        "Незрівнянний Аромоксаміт розчинної кави Jacobs Monarch з кожною чашкою дарує багатство аромату і насичений смак натуральної кави. ",
      amount: 1,
    },
    {
      id: 38,
      photoURL: photoId28,
      name: "Jacobs Monarch 120 г",
      cost: 150,
      structure:
        "Незрівнянний Аромоксаміт розчинної кави Jacobs Monarch з кожною чашкою дарує багатство аромату і насичений смак натуральної кави.",
      amount: 1,
    },
    {
      id: 39,
      photoURL: photoId29,
      name: "Tchibo Black'n White",
      cost: 110,
      structure:
        "Кава Tchibo For Black'n White однаково сподобається як для любителів чорної кави, так і для тих, хто полюбляє каву з молоком. 100 г. ",
      amount: 1,
    },
    {
      id: 40,
      photoURL: photoId30,
      name: "Tchibo Gold Selection",
      cost: 240,
      structure:
        "Зерна Tchibo Gold Selection ретельно обсмажуються невеликими партіями до благородного золотисто-коричневого відтінку. 200 г.",
      amount: 1,
    },
    {
      id: 41,
      photoURL: photoId31,
      name: "JACOBS Monarch 300 г",
      cost: 390,
      structure: "Насичений та багатий смак, збалансований легкою кислинкою.",
      amount: 1,
    },
    {
      id: 42,
      photoURL: photoId32,
      name: "Carte Noire 140 г",
      cost: 246,
      structure: "Збалансований смак з більш вираженою кислинкою",
      amount: 1,
    },
    {
      id: 43,
      photoURL: photoId33,
      name: "JACOBS 3в1 24 шт",
      cost: 105,
      structure:
        "Збалансоване втілення улюбленої кави Jacobs у форматі міксів 3в1! Jacobs 3в1 Original - це ціла чашка кавової насолоди.",
      amount: 1,
    },
    {
      id: 44,
      photoURL: photoId34,
      name: "Hyleys 100шт",
      cost: 170,
      structure:
        "Першою асортиментної лінійкою ТМ HYLEYS в категорії premium стала колекція «Англійський аристократичний» чаю, завдяки якій бренд отримав широке визнання серед поціновувачів і став втіленням істинно англійських чайних традицій.",
      amount: 1,
    },
    {
      id: 45,
      photoURL: photoId35,
      name: "Hyleys Полуниця 25шт",
      cost: 60,
      structure:
        "ершою асортиментної лінійкою ТМ HYLEYS в категорії premium стала колекція «Англійський аристократичний» чаю, завдяки якій бренд отримав широке визнання серед поціновувачів і став втіленням істинно англійських чайних традицій. ",
      amount: 1,
    },
    {
      id: 46,
      photoURL: photoId36,
      name: "AHMAD Англ. 40шт",
      cost: 54,
      structure: "Чай чорний AHMAD Англ. №1 40шт х 2г",
      amount: 1,
    },
    {
      id: 47,
      photoURL: photoId37,
      name: "НЕСКАФЕ Класік 405г",
      cost: 307,
      structure:
        "Принцип відповідального вирощування, збору та переробки кави з турботою про довкілля, лежить в основі NESCAFE®",
      amount: 1,
    },
    {
      id: 48,
      photoURL: photoId38,
      name: "НЕСКАФЕ Еспрессо 120г",
      cost: 230,
      structure:
        "Виготовлена з обсмажених до темного кольору добірних зерен 100% Арабіки, вона має міцний смак і насичений аромат.",
      amount: 1,
    },
    {
      id: 49,
      photoURL: photoId39,
      name: "JACOBS Monarch  150 г",
      cost: 170,
      structure: "Насичений та багатий смак, збалансований легкою кислинкою.",
      amount: 1,
    },
    {
      id: 50,
      photoURL: photoId40,
      name: "Карпатський 'Липа' 20шт",
      cost: 40,
      structure:
        "Склад: квіти липи. Термін і умови зберігання: термін придатності - 18 місяців. Зберігати в сухому місці при відносній вологості повітря не більше 75 %.",
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
