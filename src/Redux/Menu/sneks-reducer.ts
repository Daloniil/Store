import {actionsType} from "../redux-store";


let initialState = {
    sneks: [
        {
            id: 20,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2021/03/Potato-medalion.png',
            name: "Картопляні медальйони",
            cost: 54,
            structure: "Порція картопляних медальйонів 350 г.",
            amount: 1

        },
        {
            id: 21,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/картопляні-кульки-1-600x600.png',
            name: "Картопляні кульки",
            cost: 36,
            structure: "Велика порція картопляних кульок 20 шт",
            amount: 1

        },
        {
            id: 22,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/нагетси-9шт-1-600x600.png',
            name: "М’ясні нагетси 9 шт",
            cost: 72,
            structure: "Велика порція м'ясні нагетси 9 шт",
            amount: 1

        },
        {
            id: 23,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/курячі-ніжки-4шт-1-600x600.png',
            name: "Куряча ніжка 4 шт",
            cost: 88,
            structure: "Середня порція курячих ніжок 2 шт",
            amount: 1

        },
        {
            id: 24,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/сирні-палички-1-600x600.png',
            name: "Сирні палички",
            cost: 88,
            structure: "Велика порція сирних паличок 8 шт",
            amount: 1

        }, {
            id: 25,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/картопля-зі-спеціями-1-600x600.png',
            name: "Картопля зі спеціями",
            cost: 53,
            structure: "Велика порція картоплі зі спеціями 300г",
            amount: 1

        }, {
            id: 26,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/нагетси-6шт-1-600x600.png',
            name: "М’ясні нагетси 6 шт",
            cost: 47,
            structure: "Середня порція м'ясні нагетси 6 шт",
            amount: 1

        }, {
            id: 27,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/картопляні-діпи-1-600x600.png',
            name: "Картопляні діпи",
            cost: 44,
            structure: "Велика порція картопляних діпів 230 г",
            amount: 1

        }, {
            id: 28,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/курячі-ніжки-2шт-1-600x600.png',
            name: "Куряча ніжка 2 шт",
            cost: 48,
            structure: "Середня порція курячих ніжок 2 шт",
            amount: 1

        }, {
            id: 29,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/цибулеві-кільця-1-600x600.png',
            name: "Цибулеві кільця",
            cost: 42,
            structure: "Велика порція цибулевих кілець 10 шт",
            amount: 1

        }, {
            id: 30,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/сирні-кульки-1-600x600.png',
            name: "Сирні Кульки",
            cost: 95,
            structure: "Велика порція сирних кульок 10 шт",
            amount: 1

        }, {
            id: 31,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/мясні-стріпси-6шт-1-600x600.png',
            name: "М’ясні стріпси 6 шт",
            cost: 83,
            structure: "Середня порція м'ясних стріпсів 6шт",
            amount: 1

        }, {
            id: 32,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/04/картопля-фрі-1-600x600.png',
            name: "Картопля фрі",
            cost: 38,
            structure: "Велика порція картоплі фрі 150г",
            amount: 1

        },


    ],


};

export type initialStateType = typeof initialState


const sneksReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SETSNEKS": {
            return <initialStateType>{
                ...state,
                sneks: [...state.sneks, ...action.sneks]
            }
        }

        default:
            return state;


    }


}


type ActionsTypes = actionsType<typeof actions>

export const actions = {
    setsnekAC: (sneks: Array<initialStateType>) => {
        return {
            type: "SETSNEKS",
            sneks: sneks,
        } as const
    }

}

export default sneksReducer;