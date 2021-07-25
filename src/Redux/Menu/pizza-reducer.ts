import {actionsType} from "../redux-store";
import {AllOrderType} from "../../Types/Type";

import photoId1 from "../../Assets/Pizza/Premium.png.pagespeed.ce.3YPAVJIKMJ.png"
import photoId2 from "../../Assets/Pizza/Fermerska.png.pagespeed.ce.p_Y-0X0Wda.png"
import photoId3 from "../../Assets/Pizza/Margarita.png.pagespeed.ce.4RN5qhb1BY.png"
import photoId4 from "../../Assets/Pizza/Selyanska.png"
import photoId5 from "../../Assets/Pizza/Pekelna1.png"
import photoId6 from "../../Assets/Pizza/Sytna.png"
import photoId7 from "../../Assets/Pizza/Salami.png"
import photoId8 from "../../Assets/Pizza/Sokovyta.png"
import photoId9 from "../../Assets/Pizza/Apetitna.png"
import photoId10 from "../../Assets/Pizza/4myasa.png"
import photoId11 from "../../Assets/Pizza/4syra.png"
import photoId12 from "../../Assets/Pizza/Pikantna.png"
import photoId13 from "../../Assets/Pizza/Nizhna.png"


let initialState = {
    pizza: [
        {
            id: 1,
            photoURL: photoId1,
            name: "Преміальна",
            cost: 86,
            structure: "Склад: томатний соус, сир сулугуні, грудинка, шинка, пармезан, петрушка",
            amount: 1
        },
        {
            id: 2,
            photoURL: photoId2,
            name: "Фермерська",
            cost: 84,
            structure: "Склад: соус вершковий, сир сулугуні, балик, шинка, кукурудза, чеддер, кріп",
            amount: 1

        },
        {
            id: 3,
            photoURL: photoId3,
            name: "Маргаріта",
            cost: 64,
            structure: "Склад: соус томатний, сир моцарела, помідори, сир сулугуні, орегано",
            amount: 1

        },
        {
            id: 4,
            photoURL: photoId4,
            name: "Селянська",
            cost: 70,
            structure: "Склад: соус томатний, сир сулугуні, балик, куряче філе, кріп",
            amount: 1

        },
        {
            id: 5,
            photoURL: photoId5,
            name: "Пекельна",
            cost: 79,
            structure: "Склад: соус томатний, сир сулугуні, соус чилі, перець чилі, бекон, салямі",
            amount: 1

        },
        {
            id: 6,
            photoURL: photoId6,
            name: "Ситна",
            cost: 82,
            structure: "Склад: соус томатний, сир моцарела, сир чеддер, балик, бекон, гриби",
            amount: 1

        },
        {
            id: 7,
            photoURL: photoId7,
            name: "Салямі",
            cost: 81,
            structure: "Склад: соус томатний, сир моцарела, ковбаса салямі, помідор",
            amount: 1

        }, {
            id: 8,
            photoURL: photoId8,
            name: "Соковита",
            cost: 77,
            structure: "Склад: соус томатний, сир моцарела, балик, бекон, гриби, помідор, сир фета",
            amount: 1

        }, {
            id: 9,
            photoURL: photoId9,
            name: "Апетитна",
            cost: 72,
            structure: "Склад: соус томатний, сир моцарела, мисливські ковбаски, перець болгарський, гриби, огірок",
            amount: 1

        }, {
            id: 10,
            photoURL: photoId10,
            name: "4 м'яса",
            cost: 94,
            structure: "Склад: соус томатний, сир моцарела, куряче філе, бекон, салямі, мисливські ковбаски, помідор",
            amount: 1

        }, {
            id: 11,
            photoURL: photoId11,
            name: "4 сири",
            cost: 84,
            structure: "Склад: соус вершковий, сир моцарела, сир чеддер, сир дорблю, сир пармезан",
            amount: 1

        }, {
            id: 12,
            photoURL: photoId12,
            name: "Пікантна",
            cost: 65,
            structure: "Склад: соус вершковий, сир моцарела, бекон, гриби, цибуля синя (солодка)",
            amount: 1

        }, {
            id: 13,
            photoURL: photoId13,
            name: "Ніжна",
            cost: 68,
            structure: "Склад: соус вершковий, сир моцарела, куряче філе, гриби, ананас, кукурудза",
            amount: 1

        },

    ] as Array<AllOrderType>,
    siza: 28 as number,
    ves: 370 as number


};

export type initialStateType = typeof initialState


const pizzaReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SETPIZZA": {
            return <initialStateType>{
                ...state,
                pizza: [...state.pizza, ...action.pizza]
            }
        }


        default:
            return state;


    }
}


type ActionsTypes = actionsType<typeof actions>

export const actions = {
    setpizzAC: (pizza: Array<initialStateType>) => {
        return {
            type: "SETPIZZA",
            pizza: pizza,
        } as const
    }

}
export default pizzaReducer;