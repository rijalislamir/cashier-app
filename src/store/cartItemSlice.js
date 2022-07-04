import { createSlice } from '@reduxjs/toolkit'

const cartItemsSlice = createSlice({
    name: 'cartItem',
    initialState: [],
    reducers: {
        cartItemAdded(state, action) {
            const index = state.findIndex(item => item.id === action.payload.id)

            if (index === -1) {
                action.payload.qty = 1;
                state.push(action.payload)
            } else {
                state[index].qty++
            }
        },
        cartItemDeleted(state, action) {
            state.splice(state.findIndex(product => product.id === action.payload.id), 1)
        }
    }
})

export const { cartItemAdded, cartItemDeleted } = cartItemsSlice.actions
export default cartItemsSlice.reducer