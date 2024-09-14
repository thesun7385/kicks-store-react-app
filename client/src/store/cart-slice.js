import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the cart
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {

        // Initialize cart from database
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },

        // Add item to cart
        addItemToCart(state, action) {
            // Get the new item
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id
                && item.size === newItem.size);


            // Update total quantity
            state.totalQuantity++;
            state.changed = true;

            // if item already not exists in cart
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    category: newItem.category,
                    size: newItem.size,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                })

            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        // Remove item from cart
        removeItemFromCart(state, action) {
            // Get the item id and size
            const { id, size } = action.payload;
            const existingItem = state.items.find((item) => item.id && item.size === size)

            // update total quantity
            if (existingItem) {
                state.totalQuantity--;
                state.changed = true;
            }


            // if item quantity is 1, remove it from cart
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => !(item.id === id && item.size === size));
            } else {
                existingItem.quantity--; // just decrease the quantity
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }

})

// Export the slice actions
export const cartActions = cartSlice.actions;
export default cartSlice;
