import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Assuming you have a userSlice.js file
import moviesReducer from "./moviesSlice";
import gptReducer from "./GPTSlice";
import configReducer from "./ConfigSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    },
});

export default appStore;