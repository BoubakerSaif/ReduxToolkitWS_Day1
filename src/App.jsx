import { useDispatch, useSelector } from "react-redux";
import { incrementByOne, decrementByOne } from "./Redux/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.CounterRed);

  return (
    <div>
      The counter value is {counter}
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
    </div>
  );
};

export default App;
