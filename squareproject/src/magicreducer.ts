import { initSquare, initValues } from "./magic";
import { IAction, IStateGame } from "./types/stategame";

export function initStateGame(n: number): IStateGame {
    return {
        n: n,
        displaySums: false,
        square: initSquare(n),
        values: initValues(n*n),
        selectedValue: 0,
        selectedIndex: -1
    }
}

export function stateGameReducer(stateGame: IStateGame, action: IAction): IStateGame{
    switch (action.type){
        case 'resize_square': {
            const newN = action.newN??0;
            if ((newN < 1) || (newN > 15)) return stateGame;
            return initStateGame(newN);
        }
        case 'toggle_display_sums': {
            return {
                ...stateGame,
                displaySums: !stateGame.displaySums
            }
        }
        case 'select_value': {
            const newSelectedValue = action.newSelectedValue??stateGame.selectedValue;
            const newSelectedIndex = action.newSelectedIndex??stateGame.selectedIndex;
            console.log('new selection (index/value): ', newSelectedIndex, newSelectedValue)
            return {
                ...stateGame,
                selectedValue: newSelectedValue,
                selectedIndex: newSelectedIndex
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}