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
        }
    }
})

export const { cartItemAdded } = cartItemsSlice.actions
export default cartItemsSlice.reducer