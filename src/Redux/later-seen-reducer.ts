import {actionsType} from "./redux-store";


let initialState = {
    item: [] as Array<ItemType>,

};

export type ItemType = {
    _id: number,
    id: number,
    eat: EatType
    ves: number
    size: number,
}

export type EatType = {
    id: number,
    name: string,
    cost: number,
    size: number,
    finalcost: number,
    amount: number
}

export type initialStateType = typeof initialState


const laterSeen = (state = initialState, action: ActionsTypes): initialStateType => {
    if (action.type === "NEWITEMS") {
        {
            let n = state.item.length - 1 + 1;
            let neweat = {
                _id: n,
                eat: action.info,
                ves: action.ves,
                size: action.size
            }

            if (!state.item.some((buy) => buy.eat === action.info)) {
                if (state.item.length >= 6) {
                    state.item.splice(0, 0)
                    return <initialStateType>{
                        ...state,
                        item: [...state.item, neweat]
                    }
                } else {
                    return <initialStateType>{
                        ...state,
                        item: [...state.item, neweat]
                    }
                }
            }
        }
        return state;
    } else {
        return state;
    }

}

type ActionsTypes = actionsType<typeof actions>

export const actions = {
    newItem: (info: EatType, ves: number, size: number) => {
        return {
            type: "NEWITEMS",
            info, ves, size
        } as const
    }

}

export default laterSeen;