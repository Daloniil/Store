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
    eat: AllOrderType
    ves: number
    size: number,
}