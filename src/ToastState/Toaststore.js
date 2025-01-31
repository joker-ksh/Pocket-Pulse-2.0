import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./Toastslice";

export const store = configureStore({
    reducer : {
        toast : toastReducer,
    },
});

export default store;

