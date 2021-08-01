export type AllOrderType = {
    id: number
    photoURL: string
    name: string
    cost: number,
    structure: string,
    amount: number
    _id: number,
    eat: {
        id: number,
        name: string,
        cost: number,
        size: number,
        finalcost: number,
        amount: number
    },
    size: number,
    finalcost: number,
}


export type ItemType = {
    _id: number,
    id: number,
    eat: ReducerType
    ves: number
    size: number,
}

export type ReducerType = {
    id: number,
    photoURL: string,
    name: string,
    cost: number,
    structure: string,
    amount: number
}