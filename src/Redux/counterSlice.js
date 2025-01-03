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
    incrementByAmount: (state, action) => {
      state.counter = state.counter + Number(action.payload);
    },

    decrementByAmount: (state, action) => {
      state.counter = state.counter - Number(action.payload);
    },
  },
});

export default counterSlice.reducer;

export const {
  incrementByOne,
  decrementByOne,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;
