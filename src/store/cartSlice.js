import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        activeIndex: null,
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

            if (state.activeIndex !== null) {
                if (state.activeIndex === index) {
                    state.activeIndex = null
                } else if (state.activeIndex > index) {
                    state.activeIndex--
                }
            }

            state.items.splice(index, 1)
        },
        setActiveIndexCartItem(state, action) {
            state.activeIndex = (state.activeIndex === action.payload.index) ? null : action.payload.index
            state.numpadValue = null
        },
        numpadPressed(state, action) {
            if (state.activeIndex !== null) {
                if (action.payload.value === "DEL") {
                    console.log(action.payload.value)
                    state.numpadValue = state.numpadValue.slice(0, state.numpadValue.length - 1)
                } else {
                    state.numpadValue = (state.numpadValue === null) ? action.payload.value : state.numpadValue + action.payload.value
                }

                state.items[state.activeIndex].qty = state.numpadValue || 0
                
            }
        }
    }
})

export const { 
    cartItemAdded,
    cartItemDeleted,
    setActiveIndexCartItem,
    numpadPressed
} = cartSlice.actions
export default cartSlice.reducer