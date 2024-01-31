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
        case 'place_value': {
            const i = action.i??-1;
            const j = action.j??-1;
            console.log('place/remove value at (i,j): ', i, j);
            let valuePutBack = 0;
            let newValues = [...stateGame.values];
            let newSquare = [...stateGame.square];
            let newSelectedIndex = stateGame.selectedIndex;
            let newSelectedValue = stateGame.selectedValue;
            if (stateGame.square[i][j] !== 0) {
              console.log("A value is already there");
              // memorize value to put back in values
              valuePutBack = stateGame.square[i][j];
              // remove previous value
              newSquare[i][j] = 0;
            }
            if (stateGame.selectedValue != 0) {
              console.log(`Placing value ${stateGame.selectedValue} at ${i},${j}`);
              newSquare[i][j] = stateGame.selectedValue;
              newValues.splice(stateGame.selectedIndex, 1);
              newSelectedValue = 0;
              newSelectedIndex = -1;
            }
            if (valuePutBack != 0) {
              console.log(`Putting back value ${valuePutBack} in available values`);
              newValues.push(valuePutBack);
              newValues.sort();
            }
            return {
                ...stateGame,
                square: newSquare,
                values: newValues,
                selectedValue: newSelectedValue,
                selectedIndex: newSelectedIndex
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}