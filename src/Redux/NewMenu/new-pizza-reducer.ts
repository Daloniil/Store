import {actionsType} from "../redux-store";
import {AllOrderType} from "../../Types/Type";


let initialState = {
    pizza: [
        {
            id: 41,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2021/03/Premium.png.pagespeed.ce.3YPAVJIKMJ.png',
            name: "Преміальна",
            cost: 86,
            structure: "Склад: томатний соус, сир сулугуні, грудинка, шинка, пармезан, петрушка",
            amount: 1

        },
        {
            id: 42,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/11/Fermerska.png.pagespeed.ce.p_Y-0X0Wda.png',
            name: "Фермерська",
            cost: 84,
            structure: "Склад: соус вершковий, сир сулугуні, балик, шинка, кукурудза, чеддер, кріп",
            amount: 1

        },
        {
            id: 43,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/11/Margarita.png.pagespeed.ce.4RN5qhb1BY.png',
            name: "Маргаріта",
            cost: 64,
            structure: "Склад: соус томатний, сир моцарела, помідори, сир сулугуні, орегано",
            amount: 1

        },
        {
            id: 44,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/Selyanska.png',
            name: "Селянська",
            cost: 70,
            structure: "Склад: соус томатний, сир сулугуні, балик, куряче філе, кріп",
            amount: 1

        },


    ] as Array<AllOrderType>,
    siza: 28 as number,
    ves: 370 as number


};

export type initialStateType = typeof initialState


const newPizzaReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "NEWPIZZA": {
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
    newpizzaAC: (pizza: Array<initialStateType>) => {
        return {
            type: "NEWPIZZA",
            pizza: pizza,
        } as const
    }

}


export default newPizzaReducer;