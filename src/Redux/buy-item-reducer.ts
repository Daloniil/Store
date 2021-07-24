import {actionsType} from "./redux-store";


let initialState = {
    item: [] as Array<ItemType>,
    lenght: null as number | null,
    amoun: 0 as number,

};


export type ItemType = {
    _id: number,
    id: number,
    name: string,
    eat: {
        id: number,
        name: string,
        cost: number,
        size: number,
        finalcost: number,
        amount: number
    },
    cost: number,
    size: number,
    finalcost: number,
    amount: number
}


export type initialStateType = typeof initialState


const buyItem = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "BUYITEM": {
            let n = state.item.length;
            let buyeat = {
                _id: n,
                id: action.info.id,
                name: action.info.name,
                eat: action.info,
                cost: action.cost,
                size: action.size,
                finalcost: action.cost,
                amount: action.info.amount
            }


            if (action.size > 0) {
                if (!state.item.some((buy) => buy.id === action.info.id)) {
                    return {
                        ...state,
                        item: [...state.item, buyeat],
                        lenght: state.item.length,
                        amoun: state.amoun + action.info.amount

                    }
                } else {
                    if (!state.item.some((buy) => buy.size === action.size)) {
                        return {
                            ...state,
                            item: [...state.item, buyeat],
                            lenght: state.item.length,
                            amoun: state.amoun + action.info.amount
                        }
                    } else {
                        let searchId = action.info.id
                        let indexId = state.item.findIndex(el => el.id === searchId)


                        return {
                            ...state,
                            ...state.item[indexId].eat.amount += Object(1 as {}),
                            amoun: state.amoun + 1,
                            ...state.item[indexId].cost = Object(state.item[indexId].finalcost * state.item[indexId].eat.amount as {}),
                        }
                    }

                }

            } else if (!state.item.some((buy) => buy.id === action.info.id)) {
                return {
                    ...state,
                    item: [...state.item, buyeat],
                    lenght: state.item.length,
                    amoun: state.amoun + 1,

                }
            } else {
                let Id = action.info.id
                let index = state.item.findIndex(el => el.id === Id)

                return {
                    ...state,
                    ...state.item[index].eat.amount += Object(1 as {}),
                    amoun: state.amoun + 1,
                    ...state.item[index].cost = Object(state.item[index].finalcost * state.item[index].eat.amount as {}),
                }
            }
        }


        case "LENGHT": {
            return {
                ...state,
                lenght: action.lenght
            }
        }

        case "AMOUNTSMINUS": {
            return {
                ...state,
                amoun: state.amoun - action.newam
            }
        }

        case "AMOUNTSPLUS": {
            return {
                ...state,
                amoun: state.amoun + 1
            }
        }

        default:
            return state;
    }
}


type ActionsTypes = actionsType<typeof actions>

export const actions = {

    buy: (info: ItemType, cost: number, size: number) => {
        return {
            type: "BUYITEM",
            info, cost, size
        } as const
    },

    deleteLenght: (lenght: number) => {
        return {
            type: "LENGHT",
            lenght
        } as const
    },

    amountLeghtminus: (newam: number) => {
        return {
            type: "AMOUNTSMINUS",
            newam
        } as const
    },

    amountLeghtplus: () => {
        return {
            type: "AMOUNTSPLUS",
        } as const
    }
}


export default buyItem;