import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    incrementByOne: (state) => {
      state.counter = state.counter + 1;
    },
    decrementByOne: (state) => {
      if (state.counter > 0) {
        state.counter = state.counter - 1;
      }
    },
  },
});

export default counterSlice.reducer;

export const { incrementByOne, decrementByOne } = counterSlice.actions;
