import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name : 'toast',
    initialState : {
        message : null,
        type : null,
        visible : false,
    },
    reducers : {
        showToast : (state, action) => {
            const {message, type} = action.payload;
            state.message = message;
            state.type = type;
            state.visible = true;
        },
        hideToast : (state,action) => {
            state.message = null;
            state.type = null;
            state.visible = false;
        },
    },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;