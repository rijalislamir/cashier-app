import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        productAdded(state, action) {
            state.push(action.payload)
        },
        productDeleted(state, action) {
            state.splice(state.findIndex(product => product.id === action.payload.id), 1)
        }
    }
})

export const { productAdded, productDeleted } = productSlice.actions
export default productSlice.reducer