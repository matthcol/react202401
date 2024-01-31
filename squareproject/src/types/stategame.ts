export interface IStateGame {
    n: number,
    displaySums: boolean,
    square: number[][],
    values: number[],
    selectedValue: number,
    selectedIndex: number
}

export interface IAction {
    type: string,
    newN?: number,
    newSelectedValue?: number,
    newSelectedIndex?: number,
    i?:number,
    j?:number
}