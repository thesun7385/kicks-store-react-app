import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the UI state
const uiSlice = createSlice({
    name: "ui",
    initialState: { cartIsVisible: false, notification: null },
    // Reducers: toggle, showNotifications
    reducers: {
        // // Toggle the cart
        // toggle(state) {
        //     state.cartIsVisible = !state.cartIsVisible;
        // },

        // Open the cart
        openCart(state) {
            state.cartIsVisible = true;
        },

        // Close the cart
        closeCart(state) {
            state.cartIsVisible = false;
        },

        // // Show notification
        // showNotification(state, action) {
        //     state.notification = {
        //         status: action.payload.status,
        //         title: action.payload.title,
        //         message: action.payload.message,
        //     };
        // },
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;