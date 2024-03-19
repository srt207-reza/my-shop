import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface ProductState {
  products?: Array<object>;
}

const initialState: ProductState = {
  products: undefined,
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<Array<object>>) => {
      state.products = action.payload;
    },
  },
});

export const { updateProduct } = productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.productsReducer.products;

export default productSlice.reducer;
