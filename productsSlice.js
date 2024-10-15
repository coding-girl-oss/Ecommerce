import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 


const initialState = {
  data: [],
  status: 'idle', 
 
};


export const fetchData = createAsyncThunk('products/get', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data; 
});


const productsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.data = action.payload; 
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'error' 
      });
  },
});


export default productsSlice.reducer;
