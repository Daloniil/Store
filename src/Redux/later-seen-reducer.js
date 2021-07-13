const NEWITEM = "NEW-ITEM"

let initialState = {
    item: [],


};

const laterSeen = (state = initialState, action) => {
    switch (action.type) {
        case NEWITEM: {

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
                    return {
                        ...state,
                        item: [...state.item, neweat]
                    }
                } else {
                    return {
                        ...state,
                        item: [...state.item, neweat]
                    }
                }
            }

        }


        default:
            return state;

    }

}

export const newItem = (info, ves, size) => {
    return {
        type: NEWITEM,
        info, ves, size
    }
}

export default laterSeen;