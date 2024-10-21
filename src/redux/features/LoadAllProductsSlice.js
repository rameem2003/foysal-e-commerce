import { createSlice } from "@reduxjs/toolkit";

export const LoadAllProductsSlice = createSlice({
  name: "All Products",
  initialState: {
    products: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { allProducts } = LoadAllProductsSlice.actions;

export default LoadAllProductsSlice.reducer;
