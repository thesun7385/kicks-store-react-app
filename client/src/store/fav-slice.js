import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the favorite items
const favSlice = createSlice({
    // This is called the slice name
    name: 'fav',
    // This is the initial state
    initialState: {
        items: [],
        changed: false //for checking if the favorite is changed

    },
    // These are the actions where you store methods to update the state
    reducers: {

        // Initialize favorite from database
        replaceFav(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;

        },

        // Add/remove item to favorite
        addItemToFav(state, action) {
            // Get the new item
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            // If item already not exists in favorite, add it
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    category: newItem.category,
                    price: newItem.price,
                })
            }

        },

        // Remove item from favorite
        removeItemFromFav(state, action) {
            // Get the item id
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },



    }
});

// Export the actions
export const favActions = favSlice.actions; // for dispatching actions
export default favSlice; // for reducer