import { useDispatch, useSelector } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByAmount,
  decrementByAmount,
} from "./Redux/counterSlice";
import { useState } from "react";
import MovieList from "./Components/MovieList";

const App = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.CounterRed);
  const [num, setNum] = useState("");

  const addAmountHandler = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(num));
    setNum("");
  };

  const minusAmountHandler = (e) => {
    e.preventDefault();
    dispatch(decrementByAmount(num));
    setNum("");
  };

  return (
    <div>
      {/* The counter value is {counter}
      <div>
        <button
          onClick={() => {
            dispatch(incrementByOne());
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            dispatch(decrementByOne());
          }}
        >
          Minus 1
        </button>
      </div>
      <form>
        <label>Amount:</label>
        <input
          value={num}
          type="text"
          name="amount"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button onClick={addAmountHandler}>Add {num}</button>
        <button onClick={minusAmountHandler}> Minus {num}</button>
      </form> */}
      <MovieList />
    </div>
  );
};

export default App;
