import {actionsType} from "../redux-store";
import {AllOrderType} from "../../Types/Type";


let initialState = {
    snek: [
        {
            id: 45,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2021/03/Potato-medalion.png',
            name: "Картопляні медальйони",
            cost: 54,
            structure: "Порція картопляних медальйонів 350 г.",
            amount: 1

        },
        {
            id: 46,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/картопляні-кульки-1-600x600.png',
            name: "Картопляні кульки",
            cost: 36,
            structure: "Велика порція картопляних кульок 20 шт",
            amount: 1

        },
        {
            id: 47,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/нагетси-9шт-1-600x600.png',
            name: "М’ясні нагетси 9 шт",
            cost: 72,
            structure: "Велика порція м'ясні нагетси 9 шт",
            amount: 1

        },
        {
            id: 48,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/курячі-ніжки-4шт-1-600x600.png',
            name: "Куряча ніжка 4 шт",
            cost: 88,
            structure: "Середня порція курячих ніжок 2 шт",
            amount: 1

        },

    ] as Array<AllOrderType>,


};

export type initialStateType = typeof initialState


const newSnekReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "NEWSNEK": {
            return <initialStateType>{
                ...state,
                snek: [...state.snek, ...action.snek]
            }
        }

        default:
            return state;

    }

}


type ActionsTypes = actionsType<typeof actions>

export const actions = {
    newsnekAC: (snek: Array<initialStateType>) => {
        return {
            type: "NEWSNEK",
            snek: snek,
        } as const
    }

}

export default newSnekReducer;