import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface ProductState {
  products?: Array<object>;
  toggleHandler?: boolean;
}

const initialState: ProductState = {
  products: undefined,
  toggleHandler: false,
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<Array<object>>) => {
      state.products = action.payload;
    },
    clickProduct: (state) => {
      state.toggleHandler = !state.toggleHandler;
    },
  },
});

export const { updateProduct, clickProduct } = productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.productsReducer.products;
export const selectToggleHandler = (state: RootState) =>
  state.productsReducer.toggleHandler;

export default productSlice.reducer;
