export interface IStateGame {
    n: number,
    displaySums: boolean,
    square: number[][],
    values: number[]
}

export interface IAction {
    type: string,
    newN?: number
}