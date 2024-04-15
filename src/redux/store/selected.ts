import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface SelectedState {
  selected?: any;
  selectedRepeat?: Array<object>;
}

const initialState: SelectedState = {
  selected: [],
};

export const selectedSlice = createSlice({
  name: "Selected",
  initialState,
  reducers: {
    updateSelectedProduct: (state, action: PayloadAction<object>) => {
      state.selected = [
        ...state?.selected,
        {
          ...action?.payload,
          repeat: 1,
        },
      ];
    },
    deleteSelectedProduct: (state, action: PayloadAction<number>) => {
      state.selected = state.selected?.filter(
        (item: any) => item.id !== action.payload
      );
    },
    updateRepeatProduct: (state, action: PayloadAction<number>) => {
      const indexElem = state.selected?.findIndex(
        (item: any) => item.id === action.payload
      );

      state.selected = state.selected.map((item: any, index: number) => {
        if (index === indexElem) item.repeat++;

        return item;
      });
    },
    deleteRepeatProduct: (state, action: PayloadAction<number>) => {
      const indexElem = state.selected?.findIndex(
        (item: any) => item.id === action.payload
      );

      state.selected = state.selected.filter((item: any, index: number) => {
        if (index === indexElem) item.repeat--;

        if (item.repeat === 0) return false;

        return true;
      });
    },
  },
});

export const {
  updateSelectedProduct,
  deleteSelectedProduct,
  updateRepeatProduct,
  deleteRepeatProduct,
} = selectedSlice.actions;

export const selectedProductsForStore = (state: RootState) =>
  state.selectedReducer.selected;

export default selectedSlice.reducer;
