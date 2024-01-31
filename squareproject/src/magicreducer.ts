import { initSquare, initValues } from "./magic";
import { IStateGame } from "./types/stategame";

export function initStateGame(n: number): IStateGame {
    return {
        n: n,
        displaySums: false,
        square: initSquare(n),
        values: initValues(n*n)
    }
}

export function stateGameReducer(stateGame: IStateGame, action: any): IStateGame{
    switch (action.type){
        case 'resize_square': {
            const newN = action.newN;
            return initStateGame(newN);
        }
        case 'toggle_display_sums': {
            return {
                ...stateGame,
                displaySums: !stateGame.displaySums
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}