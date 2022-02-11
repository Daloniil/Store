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
      name: "Світоч Стожари 232 г",
      cost: 160,
      structure:
        "Це ексклюзивне асорті з трьох видів шоколаду: цукерка десерт тірамісу в чорному, крем-карамель в молочному і кокосовий крем в білому шоколаді.",
      amount: 1,
    },
    {
      id: 2,
      photoURL: photoId2,
      name: "Ferrero Rocher 200 г",
      cost: 220,
      structure:
        "Ferrero Rocher - хрусткі вафельні цукерки, покриті молочним шоколадом та подрібненими лісовими горіхами. ",
      amount: 1,
    },
    {
      id: 3,
      photoURL: photoId3,
      name: "Raffaello 240 г",
      cost: 256,
      structure:
        "Raffaello — це хрустка цукерка, вкрита кокосовою стружкою, із ніжним кремом та цілим мигдальним горіхом всередині.",
      amount: 1,
    },
    {
      id: 4,
      photoURL: photoId4,
      name: "Millennium чорний 100 г",
      cost: 48,
      structure: "Чорний шоколад з цілими лісовими горіхами.",
      amount: 1,
    },
    {
      id: 5,
      photoURL: photoId5,
      name: "Горіховий бум 150 г",
      cost: 115,
      structure: "Поєднання арахісу і фундука в чорному шоколаді, зі стевією",
      amount: 1,
    },
    {
      id: 6,
      photoURL: photoId6,
      name: "Марія з висівками",
      cost: 19,
      structure:
        "Висівки, що містяться в цьому печиві, є джерелом клітковини, яка допомагає підтримувати здоровий баланс організму.",
      amount: 1,
    },
    {
      id: 7,
      photoURL: photoId7,
      name: "Millennium Gold 205 г",
      cost: 120,
      structure:
        "Досконала гармонія смаку молочного шоколаду Millennium Gold, цілих лісових горіхів і ніжного праліне.",
      amount: 1,
    },
    {
      id: 8,
      photoURL: photoId8,
      name: "Мерсі молочний 250 г",
      cost: 233,
      structure:
        "Набір містить 4 види молочного шоколаду: горіховий крем, молочний шоколад, лісовий горіх і мигдаль, крем праліне.",
      amount: 1,
    },
    {
      id: 9,
      photoURL: photoId9,
      name: "Millennium Історії океану",
      cost: 170,
      structure:
        "Millennium Ocean Story - цукероки з молочного шоколаду з ніжною начинкою праліне з тертого фундука.",
      amount: 1,
    },
    {
      id: 10,
      photoURL: photoId10,
      name: "Конті з горіхом 450 г",
      cost: 40,
      structure:
        "Цукрове печиво з вершково-ванільним ароматом з додаванням подрібненого смаженого арахісу.",
      amount: 1,
    },
    {
      id: 11,
      photoURL: photoId11,
      name: "Шоколад Milka 90 г",
      cost: 44,
      structure:
        "Вже понад століття Мілка створює найніжніший молочний шоколад, використовуючи особливий інгредієнт - молоко з самих Альп",
      amount: 1,
    },
    {
      id: 12,
      photoURL: photoId12,
      name: "Milka з горіхом 90 г",
      cost: 40,
      structure:
        "Ніжний, молочний шоколад з подрібненим горіхом. Тане в роті, а не в руках.",
      amount: 1,
    },
    {
      id: 13,
      photoURL: photoId13,
      name: "Millennium з горіхами 100 г",
      cost: 50,
      structure:
        "Ніжний молочний шоколад з цільними лісовими горіхами Millennium Golden Nut - шоколад, гідний найвищих нагород! ",
      amount: 1,
    },
    {
      id: 14,
      photoURL: photoId14,
      name: "Корисна Кондитерська 100г",
      cost: 77,
      structure:
        "Шоколад чорний «Стевіясан» - це справжній шоколад, виготовлений з подрібнених какао бобів і натурального какао масла, без цукру з екстрактом стевії «Стевіясан» густий.",
      amount: 1,
    },
    {
      id: 15,
      photoURL: photoId15,
      name: "Millennium Golden Nut 40 г ",
      cost: 22,
      structure:
        "Шоколад чорний Millennium Golden Nut з начинкою та цілим лісовим горіхом",
      amount: 1,
    },
    {
      id: 16,
      photoURL: photoId16,
      name: "Milka з крем-полуницею",
      cost: 42,
      structure:
        "Ніжний молочний шоколад з подвійною начинкою крем і полуниця.",
      amount: 1,
    },
    {
      id: 17,
      photoURL: photoId17,
      name: "Lindt Excellence 85% какао",
      cost: 115,
      structure:
        "Чудовий швейцарський чорний гіркий 85% шоколад Lindt Excellence",
      amount: 1,
    },
    {
      id: 18,
      photoURL: photoId18,
      name: "Чорний з марципанами",
      cost: 30,
      structure:
        "Вафлі Roshen Wafers Шоколад — неглазуровані вафлі із шоколадною начинкою.",
      amount: 1,
    },
    {
      id: 19,
      photoURL: photoId19,
      name: "Roshen Assortment",
      cost: 77,
      structure:
        "Roshen Assortment Classic - асорті цукерок в чорному Шоколаді з начинками: темне праліне, ніжне праліне, кавова помадка, крем-брюле.",
      amount: 1,
    },
    {
      id: 20,
      photoURL: photoId20,
      name: "Печиво До кави",
      cost: 12,
      structure: "Цукрове печиво з ароматом топленого молока.",
      amount: 1,
    },

    {
      id: 21,
      photoURL: photoId21,
      name: "Multicake клубникою",
      cost: 20,
      structure:
        "Ніжне цукрове печиво-сендвіч з кремовою начинкою та краплею полуничного джему в центрі.",
      amount: 1,
    },

    {
      id: 22,
      photoURL: photoId22,
      name: "Roshen з лісовим горіхом ",
      cost: 30,
      structure:
        "Ромашка Roshen - глазуровані шоколадною глазур'ю цукерки, корпус - помадка вершкова крем-брюле з додавання какао-порошку та коньяку.",
      amount: 1,
    },

    {
      id: 23,
      photoURL: photoId23,
      name: "Waffeletten з шоколадом",
      cost: 88,
      structure: "Вафельні рулети Waffeletten з молочн шоколадом 100г ",
      amount: 1,
    },

    {
      id: 24,
      photoURL: photoId24,
      name: "ROSHEN WAFERS ГОРІХ",
      cost: 30,
      structure:
        "Вафлі Roshen Wafers Горіх — неглазуровані вафлі з горіховою начинкою. ",
      amount: 1,
    },

    {
      id: 25,
      photoURL: photoId25,
      name: "ROSHEN WAFERS МОЛОКО",
      cost: 25,
      structure:
        "Вафлі Roshen Wafers Молоко — неглазуровані вафлі з молочною начинкою. ",
      amount: 1,
    },

    {
      id: 26,
      photoURL: photoId26,
      name: "ROSHEN WAFERS ШОКОЛАД ",
      cost: 32,
      structure:
        "Вафлі Roshen Wafers Шоколад — неглазуровані вафлі із шоколадною начинкою.",
      amount: 1,
    },

    {
      id: 27,
      photoURL: photoId27,
      name: "KONAFETTO bianco 1кг",
      cost: 135,
      structure:
        "Ніжні вафельні трубочки в шоколадній глазурі з кремовою начинкою зі смаком згущеного молока.",
      amount: 1,
    },
    {
      id: 28,
      photoURL: photoId28,
      name: "Стріла 200г",
      cost: 110,
      structure:
        "Цукерки в шоколадній глазурі з начинкою з додаванням згущеного  молока та бренді.",
      amount: 1,
    },
    {
      id: 29,
      photoURL: photoId29,
      name: "CoffeeLike КФ 1кг",
      cost: 110,
      structure:
        "Карамель Coffeelike Roshen — молочна карамель з молочно-кавовою начинкою, містить екстракт натуральної кави.",
      amount: 1,
    },
    {
      id: 30,
      photoURL: photoId30,
      name: "Raffaello 150 г.",
      cost: 140,
      structure:
        "Raffaello - це хрустка цукерка, вкрита кокосовою стружкою, із ніжним кремом та цілим мигдальним горіхом всередині. ",
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
