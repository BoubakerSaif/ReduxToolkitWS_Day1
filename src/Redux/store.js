import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import movieReducer from "./movieSlice";
const store = configureStore({
  reducer: { CounterRed: counterReducer, movie: movieReducer },
});

export default store;
