import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_LOCAL_API}`)

            return response.data
        } catch (error) {
            console.error(error)
        }
    }
    )
    
    export const createProduct = createAsyncThunk(
        'products/createProduct',
        async (params, thunkAPI) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_LOCAL_API}`, params)
            
            thunkAPI.dispatch(getProducts())

            return response.data
        } catch (error) {
            console.error(error)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (props, thunkAPI) => {
        try {
            const { _id } = props
            const response = await axios.delete(`${process.env.REACT_APP_LOCAL_API}/${_id}`)

            thunkAPI.dispatch(getProducts())

            return response.data
        } catch (error) {
            console.error(error)
        }
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        activeIndex: null,
        keyword: "",
        list: [],
        isLoading: false,
        isError: false,
        message: ''
    },
    extraReducers: builder => builder
        // getProducts
        .addCase(getProducts.pending, state => {
            state.isLoading = true
            state.isError = false
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload
            state.isLoading = false
            state.isError = false
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // createProduct
        .addCase(createProduct.pending, state => {
            state.isLoading = true
            state.isError = false
        })
        .addCase(createProduct.fulfilled, state => {
            state.isLoading = false
            state.isError = false
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // deleteProduct
        .addCase(deleteProduct.pending, state => {
            state.isLoading = true
            state.isError = false
        })
        .addCase(deleteProduct.fulfilled, state => {
            state.isLoading = false
            state.isError = false
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        }),
    reducers: {
        productSearched(state, action) {
            state.keyword = action.payload.keyword
        },
    },
})

export const { productSearched } = productSlice.actions

export default productSlice.reducer