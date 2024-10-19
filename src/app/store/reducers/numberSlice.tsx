import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  calculateValue: number;
}

const initialState: CounterState = {
  value: 0,
  calculateValue: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.calculateValue += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.calculateValue -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  countSlice.actions;
export default countSlice.reducer;
