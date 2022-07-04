import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'products',
    initialState: {
        keyword: "",
        list: []
    },
    reducers: {
        productAdded(state, action) {
            state.list.push(action.payload)
        },
        productDeleted(state, action) {
            state.list.splice(state.list.findIndex(product => product.id === action.payload.id), 1)
        },
        productSearched(state, action) {
            state.keyword = action.payload.keyword
        }
    }
})

export const {
    productAdded,
    productDeleted,
    productSearched
} = productSlice.actions
export default productSlice.reducer