export type AllOrderType = {
    id: number
    photoURL: string
    name: string
    cost: number,
    structure: string,
    amount: number
}


export type ItemType = {
    _id: number,
    id: number,
    eat: AllOrderType
    ves: number
    size: number,
}