import { configureStore } from '@reduxjs/toolkit'
import cartItemSlice from './cartItemSlice'
import productsReducer from './productSlice'

export const store = configureStore({
    reducer: {
        cartItems: cartItemSlice,
        products: productsReducer
    }
})