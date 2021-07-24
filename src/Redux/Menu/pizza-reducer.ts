import {actionsType} from "../redux-store";


let initialState = {
    pizza: [
        {
            id: 1,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2021/03/Premium.png.pagespeed.ce.3YPAVJIKMJ.png',
            name: "Преміальна",
            cost: 86,
            structure: "Склад: томатний соус, сир сулугуні, грудинка, шинка, пармезан, петрушка",
            amount: 1
        },
        {
            id: 2,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/11/Fermerska.png.pagespeed.ce.p_Y-0X0Wda.png',
            name: "Фермерська",
            cost: 84,
            structure: "Склад: соус вершковий, сир сулугуні, балик, шинка, кукурудза, чеддер, кріп",
            amount: 1

        },
        {
            id: 3,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/11/Margarita.png.pagespeed.ce.4RN5qhb1BY.png',
            name: "Маргаріта",
            cost: 64,
            structure: "Склад: соус томатний, сир моцарела, помідори, сир сулугуні, орегано",
            amount: 1

        },
        {
            id: 4,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/Selyanska.png',
            name: "Селянська",
            cost: 70,
            structure: "Склад: соус томатний, сир сулугуні, балик, куряче філе, кріп",
            amount: 1

        },
        {
            id: 5,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2021/03/Premium.png.pagespeed.ce.3YPAVJIKMJ.png',
            name: "Пекельна",
            cost: 79,
            structure: "Склад: соус томатний, сир сулугуні, соус чилі, перець чилі, бекон, салямі",
            amount: 1

        },
        {
            id: 6,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/Sytna.png',
            name: "Ситна",
            cost: 82,
            structure: "Склад: соус томатний, сир моцарела, сир чеддер, балик, бекон, гриби",
            amount: 1

        },
        {
            id: 7,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/Salami.png',
            name: "Салямі",
            cost: 81,
            structure: "Склад: соус томатний, сир моцарела, ковбаса салямі, помідор",
            amount: 1

        }, {
            id: 8,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/Sokovyta.png',
            name: "Соковита",
            cost: 77,
            structure: "Склад: соус томатний, сир моцарела, балик, бекон, гриби, помідор, сир фета",
            amount: 1

        }, {
            id: 9,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/Apetitna.png',
            name: "Апетитна",
            cost: 72,
            structure: "Склад: соус томатний, сир моцарела, мисливські ковбаски, перець болгарський, гриби, огірок",
            amount: 1

        }, {
            id: 10,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/4myasa.png',
            name: "4 м'яса",
            cost: 94,
            structure: "Склад: соус томатний, сир моцарела, куряче філе, бекон, салямі, мисливські ковбаски, помідор",
            amount: 1

        }, {
            id: 11,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/4syra.png',
            name: "4 сири",
            cost: 84,
            structure: "Склад: соус вершковий, сир моцарела, сир чеддер, сир дорблю, сир пармезан",
            amount: 1

        }, {
            id: 12,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/Pikantna.png',
            name: "Пікантна",
            cost: 65,
            structure: "Склад: соус вершковий, сир моцарела, бекон, гриби, цибуля синя (солодка)",
            amount: 1

        }, {
            id: 13,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2018/11/Nizhna.png',
            name: "Ніжна",
            cost: 68,
            structure: "Склад: соус вершковий, сир моцарела, куряче філе, гриби, ананас, кукурудза",
            amount: 1

        },

    ],
    siza: 28,
    ves: 370


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