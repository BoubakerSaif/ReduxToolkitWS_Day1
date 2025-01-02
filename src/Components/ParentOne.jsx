import { useSelector } from "react-redux";

const ParentOne = () => {
  const { counter } = useSelector((state) => state.CounterRed);

  return (
    <div>In ParentOne Component the value of the counter is {counter} </div>
  );
};

export default ParentOne;
