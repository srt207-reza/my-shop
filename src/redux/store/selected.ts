import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface SelectedState {
  selected?: Array<object>;
  selectedRepeat?: Array<object>;
}

const initialState: SelectedState = {
  selected: [],
  selectedRepeat: [],
};

export const selectedSlice = createSlice({
  name: "Selected",
  initialState,
  reducers: {
    updateSelectedProduct: (state, action: PayloadAction<object>) => {
      state.selected?.push(action.payload);
      state.selectedRepeat?.push(action.payload);
    },
    deleteSelectedProduct: (state, action: PayloadAction<number>) => {
      state.selected = state.selected?.filter(
        (item: any) => item.id !== action.payload
      );
      state.selectedRepeat = state.selectedRepeat?.filter(
        (item: any) => item.id !== action.payload
      );
    },
    updateSelectedRepeatProduct: (state, action: PayloadAction<object>) => {
      state.selectedRepeat?.push(action.payload);
    },
    deleteSelectedRepeatProduct: (state, action: PayloadAction<number>) => {
      state.selectedRepeat = state.selectedRepeat?.filter(
        (item: any) => item.id !== action.payload
      );

      state.selected = state.selectedRepeat
    },
  },
});

export const {
  updateSelectedProduct,
  deleteSelectedProduct,
  updateSelectedRepeatProduct,
  deleteSelectedRepeatProduct,
} = selectedSlice.actions;

export const selectedProductsForStore = (state: RootState) =>
  state.selectedReducer.selected;

export const selectedRepeatProductsForStore = (state: RootState) =>
  state.selectedReducer.selectedRepeat;

export default selectedSlice.reducer;
