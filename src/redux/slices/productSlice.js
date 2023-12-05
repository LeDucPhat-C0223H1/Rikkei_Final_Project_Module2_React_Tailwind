import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getProductLists = createAsyncThunk(
    "getProductLists",
    async () => {
        let res = await api.product.findAllProducts();
        return res.data
    }
)

export const filterProductById = createAsyncThunk(
    "filterProductById",
    async (id) => {
        let res = await api.product.filterProductById(id)
        return res.data
    }
)

export const filterProductByGender = createAsyncThunk(
    "filterProductByGender",
    async (gender) => {
        let res = await api.product.filterProductByGender(gender)
        return res.data
    }
)

export const filterProductByGenderAndSort = createAsyncThunk(
    "filterProductByGenderAndSort",
    async (payload) => {
        let res = await api.product.filterProductByGenderAndSort(payload.gender,payload.type,payload.sort)
        return res.data
    }
)

export const searchProductByName = createAsyncThunk(
    "searchProductByName",
    async (name) => {
        let res = await api.product.searchProductByName(name);
        return   res.data
          
        

    }
)



const productSlice = createSlice(
    {
        name: "product",
        initialState: {
            isLoading : false,
            listProducts: [],
            product: {},
            isError : false,
            productMessage : '',
            searchData:[]
        },
        extraReducers: (builder) => {
            builder.addCase(getProductLists.pending, (state) => {
                state.isLoading = true;
            })
            builder.addCase(getProductLists.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listProducts = [...action.payload];
            })
            builder.addCase(getProductLists.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.productMessage = 'Lỗi';
            })

            // ----------------------------- //

            builder.addCase(filterProductById.pending, (state) => {
                state.isLoading = true;
            })
            builder.addCase(filterProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listProducts = [...action.payload]
            })
            builder.addCase(filterProductById.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.productMessage = 'Lỗi';
            })

            // ----------------------------- //

            builder.addCase(filterProductByGender.pending, (state) => {
                state.isLoading = true;
            })
            builder.addCase(filterProductByGender.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listProducts = [...action.payload]
                
            })
            builder.addCase(filterProductByGender.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.productMessage = 'Lỗi';
            })

            // ----------------------------- //

            builder.addCase(filterProductByGenderAndSort.pending, (state) => {
                state.isLoading = true;
            })
            builder.addCase(filterProductByGenderAndSort.fulfilled, (state, action) => {
                state.isLoading = false;
                state.listProducts = [...action.payload]
            })
            builder.addCase(filterProductByGenderAndSort.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.productMessage = 'Lỗi';
            })

            // ----------------------------- //

            // search product by name
            builder.addCase(searchProductByName.fulfilled, (state, action) => {
                console.log(action.payload);

                state.searchData = [...action.payload]
            })



        }
    }
)
export default productSlice.reducer;