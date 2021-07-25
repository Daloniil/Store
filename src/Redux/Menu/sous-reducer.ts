import {actionsType} from "../redux-store";


export type SousType = {
    size: number,
    finalcost: number,
    id: number
    photoURL: string
    name: string
    cost: number,
    structure: string,
    amount: number
}

let initialState = {
    sous: [
        {
            id: 33,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142057_843-300x300.png',
            name: "Сирний",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 34,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142048_558-300x300.png',
            name: "Часиниковий",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 35,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142050_744-300x300.png',
            name: "Чилі гострий",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 36,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142053_301-300x300.png',
            name: "Барбекю",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 37,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142054_571-300x300.png',
            name: "Кисло-солодкий",
            cost: 10,
            structure: "",
            amount: 1

        },
        {
            id: 38,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142058_636-300x300.png',
            name: "Тартар",
            cost: 10,
            structure: "",
            amount: 1

        }, {
            id: 39,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142055_628-300x300.png',
            name: "Паприка",
            cost: 10,
            structure: "",
            amount: 1

        }, {
            id: 40,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/12/IMG_20191218_142047_336-1-300x300.png',
            name: "Французький",
            cost: 10,
            structure: "",
            amount: 1

        },


    ] as Array<SousType>,


};

export type initialStateType = typeof initialState


const sousReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SETSOUS" : {
            return <initialStateType>{
                ...state,
                sous: [...state.sous, action.sous]
            }
        }
        default:
            return state
    }
}


type ActionsTypes = actionsType<typeof actions>

export const actions = {
    setsousAC: (sous: Array<initialStateType>) => {
        return {
            type: "SETSOUS",
            sous: sous,
        } as const
    }

}


export default sousReducer
