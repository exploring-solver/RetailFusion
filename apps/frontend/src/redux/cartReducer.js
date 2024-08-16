import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
};

export const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('addToCart', (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === item.id);
            
            if (existingItem) {
                state.cartItems = state.cartItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            } else {
                state.cartItems.push(item);
            }
        })
        .addCase('updateQuantity', (state, action) => {
            const { id, quantity } = action.payload;
            state.cartItems = state.cartItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            );
        })
        .addCase('decrementQuantity', (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            );
        })
        .addCase('removeFromCart', (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        })
        .addCase('calculatePrice', (state) => {
            let sum = 0;
            state.cartItems.forEach((i) => (sum += i.price * i.quantity));
            state.subTotal = sum;
            state.shipping = state.subTotal > 1000 ? 0 : 200;
            state.tax = +(state.subTotal * 0.18).toFixed();
            state.total = state.subTotal + state.tax + state.shipping;
        });
});
