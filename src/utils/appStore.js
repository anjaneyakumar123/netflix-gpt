import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Assuming you have a userSlice.js file
import moviesReducer from "./moviesSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
});

export default appStore;