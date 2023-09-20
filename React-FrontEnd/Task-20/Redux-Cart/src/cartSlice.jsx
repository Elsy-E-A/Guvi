import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: 0,
    reducers: {
        incrementCart: (state) => state + 1,
        decrementCart: (state) => state - 1,
        resetCart: () => 0,
    },
});

export const { incrementCart, decrementCart, resetCart } = cartSlice.actions; //Obj destructuring!
export default cartSlice.reducer