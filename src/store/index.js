import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productsReducer from './productSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsReducer
    }
})