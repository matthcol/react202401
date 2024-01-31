import { configureStore } from "@reduxjs/toolkit"
import squareReducer from "./squareSlice"

export const store = configureStore({
    reducer: {
        square: squareReducer
    }
})