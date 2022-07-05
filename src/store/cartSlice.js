import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {
        active: null,
        numpadValue: null,
        items: []
    },
    reducers: {
        cartItemAdded(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload.id)

            if (index === -1) {
                action.payload.qty = 1;
                state.items.push(action.payload)
            } else {
                state.items[index].qty++
            }
        },
        cartItemDeleted(state, action) {
            const index = state.items.findIndex(product => product.id === action.payload.id)

            if (state.active !== null) {
                if (state.active === index) {
                    state.active = null
                } else if (state.active > index) {
                    state.active--
                }
            }

            state.items.splice(index, 1)
        },
        activeCartItemSelected(state, action) {
            state.active = (state.active === action.payload.index) ? null : action.payload.index
            state.numpadValue = null
        },
        numpadPressed(state, action) {
            if (state.active !== null) {
                if (action.payload.value === "DEL") {
                    console.log(action.payload.value)
                    state.numpadValue = state.numpadValue.slice(0, state.numpadValue.length - 1)
                } else {
                    state.numpadValue = (state.numpadValue === null) ? action.payload.value : state.numpadValue + action.payload.value
                }

                state.items[state.active].qty = state.numpadValue || 0
                
            }
        }
    }
})

export const { 
    cartItemAdded,
    cartItemDeleted,
    activeCartItemSelected,
    numpadPressed
} = cartSlice.actions
export default cartSlice.reducer