import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterStore";
import watchlistReducer from "./WatchListStore";
import movieReducer from "./MovieStore";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watchList: watchlistReducer,
        movieList: movieReducer
    }
})