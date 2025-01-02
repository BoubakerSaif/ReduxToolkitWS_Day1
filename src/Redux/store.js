import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
const store = configureStore({
  reducer: { CounterRed: counterReducer },
});

export default store;
