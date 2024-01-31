import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateOrAny } from 'react-redux';


export const squareSlice = createSlice({
    name: "square",
    initialState: {
        n: 3,
        displaySum: false
    },
    reducers: {
        resizeSquare: (stateGame, {payload}: PayloadAction<number>) => {
            const newN = payload;
            stateGame.n = newN;
        }
    }
});

// export const selectN = (state: RootState) => state.square.n
export const selectN = (state: RootStateOrAny) => state.square.n;
export const {resizeSquare } = squareSlice.actions;
export default squareSlice.reducer;