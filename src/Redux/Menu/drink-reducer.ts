import {actionsType, BaseThunkType} from "../redux-store";
import {DrinkType} from "../NewMenu/new-drink-reducer";


let initialState = {
    drink: [
        {
            id: 14,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2020/01/Сік-яблучно-гранатовий-300x300.png',
            name: "Сік яблучно-гранатовий 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 15,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/09/pepsi_bottle_600_square.png',
            name: "Pepsi 1 л",
            cost: 25,
            structure: "",
            amount: 1

        },
        {
            id: 16,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/02/Сік-мультивітамін-300x300.png',
            name: "Сік мульти-вітамінний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 17,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/02/Сік-яблучно-виноградний-300x300.png',
            name: "Сік яблучно-виноградний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 18,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/02/Сік-мультифрукт-300x300.png',
            name: "Сік мульти-фруктовий 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 19,
            photoURL: 'https://pizzatime.com.ua/wp-content/uploads/2019/02/cocacola_bottle_600_square.png',
            name: "Coca Cola",
            cost: 25,
            structure: "",
            amount: 1

        },


    ] as Array<DrinkType>,


};

export type initialStateType = typeof initialState

const drinkReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SETDRINK": {
            return <initialStateType>{
                ...state,
                drink: [...state.drink, ...action.drink]
            }
        }

        default:
            return state;
    }
}

type ActionsTypes = actionsType<typeof actions>


export const actions = {
    setdrinkAC: (drink: Array<initialStateType>) => {
        return {
            type: "SETDRINK",
            drink,
        } as const
    }
}


export default drinkReducer;