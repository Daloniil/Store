const BUYITEM = "BUY-ITEM"
const LENGHT = "LENGHT"
const AMOUNTSMINUS = "AMOUNTSMINUS"
const AMOUNTSPLUS = "AMOUNTSPLUS"


let initialState = {
    item: [],
    lenght: null,
    amoun: null,

};

const buyItem = (state = initialState, action) => {
    switch (action.type) {
        case BUYITEM: {


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
                            ...state.item[indexId].eat.amount += 1,
                            amoun: state.amoun + 1,
                            ...state.item[indexId].cost = state.item[indexId].finalcost * state.item[indexId].eat.amount,
                        }
                    }

                }

            } else if (!state.item.some((buy) => buy.id === action.info.id)) {
                return {
                    ...state,
                    item: [...state.item, buyeat],
                    lenght: state.item.length,
                    amoun: action.info.amount

                }
            } else {
                let Id = action.info.id
                let index = state.item.findIndex(el => el.id === Id)
                return {
                    ...state,
                    ...state.item[index].eat.amount += 1,
                    amoun: state.amoun + 1,
                    ...state.item[index].cost = state.item[index].finalcost * state.item[index].eat.amount,
                }
            }
        }


        case LENGHT: {
            return {
                ...state,
                lenght: action.lenght
            }
        }

        case AMOUNTSMINUS: {
            return {
                ...state,
                amoun: state.amoun - action.newam
            }
        }

        case AMOUNTSPLUS: {
            return {
                ...state,
                amoun: state.amoun + 1
            }
        }

        default:
            return state;
    }
}


export const buy = (info, cost, size) => {
    return {
        type: BUYITEM,
        info, cost, size
    }
}

export const deleteLenght = (lenght) => {
    return {
        type: LENGHT,
        lenght
    }
}

export const amountLeghtminus = (newam) => {
    return {
        type: AMOUNTSMINUS,
        newam
    }
}

export const amountLeghtplus = () => {
    return {
        type: AMOUNTSPLUS,
    }
}


export default buyItem;