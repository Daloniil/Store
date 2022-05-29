/* eslint-disable @typescript-eslint/consistent-type-assertions */
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
      name: "Рис длинный Extra!",
      cost: 40,
      structure: "Рис длинный Extra!, 1000 гр",
      amount: 1,
    },
    {
      id: 71,
      photoURL: photoId34,
      name: "Рис Жменька",
      cost: 38,
      structure: "Рис Жменька длиннозернистый, 400",
      amount: 1,
    },
    {
      id: 72,
      photoURL: photoId35,
      name: "Рис шлифованний",
      cost: 54,
      structure: "Рис Премія шлифованный круглозернистый, 1000 гр",
      amount: 1,
    },
    {
      id: 73,
      photoURL: photoId36,
      name: "Рис шлифованний ",
      cost: 64,
      structure: "Рис Премія шлифованный длиннозернистый, 1000 гр",
      amount: 1,
    },
    {
      id: 74,
      photoURL: photoId37,
      name: "Цукор  ванільний",
      cost: 5,
      structure: "Цукор Dr.Oetker ванільний добавка для випічки 8г",
      amount: 1,
    },
    {
      id: 75,
      photoURL: photoId38,
      name: "Пудинг ванільний",
      cost: 15,
      structure: "Пудинг Dr.Oetker з ванільним смаком 40г",
      amount: 1,
    },
    {
      id: 76,
      photoURL: photoId39,
      name: "Пудинг шоколадний",
      cost: 20,
      structure: "Пудинг Dr.Oetker з шоколадним смаком 50г",
      amount: 1,
    },
    {
      id: 77,
      photoURL: photoId40,
      name: "Розпушувач тіста",
      cost: 6,
      structure: "Розпушувач Dr.Oetker тесту добавка для випічки 10г",
      amount: 1,
    },
    {
      id: 78,
      photoURL: photoId41,
      name: "Сіль кам'яна",
      cost: 11,
      structure: "Сіль Артемсіль кам'яна плита, 1кг",
      amount: 1,
    },
    {
      id: 79,
      photoURL: photoId42,
      name: "Сіль Екстра",
      cost: 32,
      structure: "Сіль Екстра кухонна йодована, 200г",
      amount: 1,
    },
    {
      id: 80,
      photoURL: photoId43,
      name: "Розпушувач тіста",
      cost: 7,
      structure: "Розпушувач Еко тесту для випічки 18г",
      amount: 1,
    },
    {
      id: 81,
      photoURL: photoId44,
      name: "Сіль Премія морська",
      cost: 56,
      structure: "Сіль Премія морська йодована помол Солонка 350г",
      amount: 1,
    },
    {
      id: 82,
      photoURL: photoId45,
      name: "Сіль Премія Екстра",
      cost: 51,
      structure: "Сіль Премія Екстра Йод і Фтор, 450г",
      amount: 1,
    },
    {
      id: 83,
      photoURL: photoId46,
      name: "Приправа для курки",
      cost: 10,
      structure: "Приправа Приправка Ексклюзив для курки 50г",
      amount: 1,
    },
    {
      id: 84,
      photoURL: photoId47,
      name: "Рис пропарений",
      cost: 60,
      structure: "Рис Премія шлифованный пропаренный длиннозернистый, 1000 гр",
      amount: 1,
    },
    {
      id: 85,
      photoURL: photoId48,
      name: "Соус Сацебелі",
      cost: 38,
      structure: "Соус Торчин продукт Сацебелі д/п 200г",
      amount: 1,
    },
    {
      id: 86,
      photoURL: photoId49,
      name: "Соус Часниковий",
      cost: 31,
      structure: "Соус Торчин Часниковий Д/п 200г",
      amount: 1,
    },
    {
      id: 87,
      photoURL: photoId50,
      name: "Соус соєвий",
      cost: 52,
      structure: "Соус Katana соєвий з/б 200мл",
      amount: 1,
    },
    {
      id: 88,
      photoURL: photoId51,
      name: "Порошок гірчичний",
      cost: 17,
      structure: "Порошок Еко гірчичний 100г",
      amount: 1,
    },
    {
      id: 89,
      photoURL: photoId52,
      name: "Приправа для риби",
      cost: 35,
      structure: "Приправа Приправка для риби 45г",
      amount: 1,
    },
    {
      id: 90,
      photoURL: photoId53,
      name: "Соус Мехикано",
      cost: 32,
      structure: "Соус Торчин продукт Мехикано д/п 200г",
      amount: 1,
    },
    {
      id: 91,
      photoURL: photoId54,
      name: "Сіль з фтором",
      cost: 40,
      structure: "Сіль екстра з фтором і йодом",
      amount: 1,
    },
    {
      id: 92,
      photoURL: photoId55,
      name: "Соус томатний",
      cost: 50,
      structure: "Соус Руна Кетча томатний 485 г",
      amount: 1,
    },
    {
      id: 93,
      photoURL: photoId56,
      name: "Перець чорний",
      cost: 15,
      structure: "Перець Еко чорний мелений 20г",
      amount: 1,
    },
    {
      id: 94,
      photoURL: photoId57,
      name: "Суміш перців",
      cost: 80,
      structure: "Суміш перців 80г",
      amount: 1,
    },
    {
      id: 95,
      photoURL: photoId58,
      name: "Томати мариновані",
      cost: 48,
      structure: "Томати Верес Посольські Черрі мариновані 310г",
      amount: 1,
    },
    {
      id: 96,
      photoURL: photoId59,
      name: "Томати зі спеціями",
      cost: 110,
      structure: "Томати Almito в'ялені зі спеціями 320мл",
      amount: 1,
    },
    {
      id: 97,
      photoURL: photoId60,
      name: "Томати В'ялені",
      cost: 200,
      structure: "Томати Olymp В'ялені 360г",
      amount: 1,
    },
    {
      id: 98,
      photoURL: photoId61,
      name: "Томати Маринадо",
      cost: 45,
      structure: "Томати Маринадо Маринов 720мл",
      amount: 1,
    },
    {
      id: 99,
      photoURL: photoId62,
      name: "Томати Ніжин",
      cost: 65,
      structure: "Томати Ніжин мариновані 920г",
      amount: 1,
    },
    {
      id: 100,
      photoURL: photoId63,
      name: "Тунець в олії",
      cost: 65,
      structure: "Тунець Премія шматочки в олії ключ 185м",
      amount: 1,
    },
    {
      id: 101,
      photoURL: photoId64,
      name: "Сардина натуральна",
      cost: 42,
      structure: "Сардина Креон натуральна з додаванням олії №5 240г",
      amount: 1,
    },
    {
      id: 102,
      photoURL: photoId65,
      name: "Печінка тріски",
      cost: 70,
      structure: "Печінка тріски Премія 121г",
      amount: 1,
    },
    {
      id: 103,
      photoURL: photoId66,
      name: "Сардини Атлантична",
      cost: 60,
      structure: "Сардини Премія Атлантична Бланшована 240г",
      amount: 1,
    },
    {
      id: 104,
      photoURL: photoId67,
      name: "Шпроти Ризькі",
      cost: 110,
      structure: "Шпроти Ризьке золото в олії ключ 190г",
      amount: 1,
    },
    {
      id: 105,
      photoURL: photoId68,
      name: "Форель Соломка",
      cost: 40,
      structure: "Форель Пивний Nabeer Соломка Суш 25г",
      amount: 1,
    },
    {
      id: 106,
      photoURL: photoId69,
      name: "Рибна Паста",
      cost: 50,
      structure: "Рибна Паста Русалонька Аляска 150г",
      amount: 1,
    },
    {
      id: 107,
      photoURL: photoId70,
      name: "Салака",
      cost: 55,
      structure: "Салака Флагман Х/З/р 250г",
      amount: 1,
    },
    {
      id: 108,
      photoURL: photoId71,
      name: "Сьомга філе",
      cost: 192,
      structure: "Сьомга Extra! філе шматок с/с в/у 180г",
      amount: 1,
    },
    {
      id: 109,
      photoURL: photoId72,
      name: "Морскі водорослі",
      cost: 55,
      structure: "Салат Санта Бремор Чука із морських водоростей, 150 гр",
      amount: 1,
    },
    {
      id: 110,
      photoURL: photoId73,
      name: "Органічна паста",
      cost: 130,
      structure: "Органічна паста Corolle, 400 гр",
      amount: 1,
    },
    {
      id: 111,
      photoURL: photoId74,
      name: "Органічна суміш",
      cost: 90,
      structure: "Органічна суміш спецій Тай карі 23гр Lebensbaum",
      amount: 1,
    },
    {
      id: 112,
      photoURL: photoId75,
      name: "Органічна кориця",
      cost: 95,
      structure: "Органічна кориця цейлонська 50гр.",
      amount: 1,
    },
    {
      id: 113,
      photoURL: photoId76,
      name: "Органічна куркума",
      cost: 86,
      structure: "Органічна куркума 50гр.",
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
